
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Button, Select, SelectItem, TextInput, TextArea,
  FileUploader, DatePicker, DatePickerInput, RadioButtonGroup, RadioButton,
  Modal
} from "@carbon/react";

type FormState = {
  category: string;
  district: string;
  address: string;
  wardNo: string;
  era: "AD" | "BS";
  date: string;
  description: string;
  attachments: string[];
};

const categories = ["Road", "Water", "Electricity", "Sanitation", "Other"];

export default function SubmitPage() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [form, setForm] = React.useState<FormState>({
    category: "Road",
    district: "",
    address: "",
    wardNo: "",
    era: "AD",
    date: "",
    description: "",
    attachments: [],
  });

  const onFileAdd = (list: File[]) => {
    setForm(f => ({ ...f, attachments: list.map(f => f.name) }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.category) e.category = "Required";
    if (!form.district) e.district = "Required";
    if (!form.address) e.address = "Required";
    if (!form.wardNo) e.wardNo = "Required";
    if (!form.date) {
      e.date = "Required";
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(form.date)) {
      e.date = "Use format YYYY-MM-DD";
    }
    if (!form.description) e.description = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (validate()) setOpen(true); 
  };

  const confirmAndSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/grievances", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Save failed");
      const data = await res.json();

      try {
        const existing = JSON.parse(localStorage.getItem("notifications") || "[]");
        const note = { id: Date.now(), text: "Your grievance has been submitted. Check that out", ref: data.id };
        const next = [note, ...(Array.isArray(existing) ? existing : [])];
        localStorage.setItem("notifications", JSON.stringify(next));
      } catch {}

      router.replace(`/submit/success/id?ticket=${encodeURIComponent(data.id)}`);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
      setOpen(false);
    }
  };

  const reset = () =>
    setForm({
      category: "Road",
      district: "",
      address: "",
      wardNo: "",
      era: "AD",
      date: "",
      description: "",
      attachments: [],
    });

  return (
    <main className="min-h-screen has-mobile-footer" style={{ padding: "1rem 1rem 6rem" }}>
      <h2 className="text-lg font-semibold mb-4">Submit Grievance</h2>

      <form noValidate onSubmit={handleSubmit} className="grid gap-4" aria-describedby="submit-help">
        <div className="form-row">
          <Select
            id="category"
            labelText="Select Category"
            value={form.category}
            invalid={!!errors.category}
            invalidText={errors.category}
            onChange={(e: any) => setForm(f => ({ ...f, category: e.target.value }))}
            required
          >
            {categories.map(c => <SelectItem text={c} value={c} key={c} />)}
          </Select>
        </div>

        <div className="form-row grid gap-3" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          <TextInput id="district" labelText="District" value={form.district}
            invalid={!!errors.district} invalidText={errors.district}
            onChange={(e: any) => setForm(f => ({ ...f, district: e.target.value }))} required />
          <TextInput id="address" labelText="Address" value={form.address}
            invalid={!!errors.address} invalidText={errors.address}
            onChange={(e: any) => setForm(f => ({ ...f, address: e.target.value }))} required />
          <TextInput id="ward" labelText="Ward No" value={form.wardNo}
            invalid={!!errors.wardNo} invalidText={errors.wardNo}
            onChange={(e: any) => setForm(f => ({ ...f, wardNo: e.target.value }))} required />
        </div>

        <div className="form-row grid gap-3" style={{ gridTemplateColumns: "2fr 1fr" }}>
          <DatePicker
            datePickerType="single"
            dateFormat="Y-m-d"
            onChange={(dates: any) => {
              const d: Date | undefined = Array.isArray(dates) ? dates[0] : dates;
              setForm(f => ({ ...f, date: d ? d.toISOString().slice(0, 10) : "" }));
            }}
          >
            <DatePickerInput
              id="date"
              labelText="Date"
              placeholder="yyyy-mm-dd"
              invalid={!!errors.date}
              invalidText={errors.date}
            />
          </DatePicker>

          <RadioButtonGroup
            legendText=" "
            name="era"
            value={form.era}
            onChange={(selection) =>
              setForm(f => ({ ...f, era: ((selection as string) ?? "AD") as "AD" | "BS" }))
            }
          >
            <RadioButton value="BS" id="era-bs" labelText="BS" />
            <RadioButton value="AD" id="era-ad" labelText="AD" />
          </RadioButtonGroup>
        </div>

        <div className="form-row">
          <TextArea id="desc" labelText="Describe Issue"
            value={form.description}
            invalid={!!errors.description} invalidText={errors.description}
            onChange={(e: any) => setForm(f => ({ ...f, description: e.target.value }))} required />
        </div>

        <div className="form-row">
          <label className="bx--label">Add Images/Attachments (Optional)</label>
          <FileUploader
            buttonKind="secondary"
            labelTitle=""
            labelDescription=""
            filenameStatus="edit"
            onChange={(evt: any) => onFileAdd(Array.from(evt?.addedFiles ?? []))}
          />
        </div>

        <div className="form-row" style={{ display: "flex", gap: 12 }}>
          <Button kind="primary" type="submit">Submit</Button>
          <Button kind="secondary" type="button" onClick={reset}>Reset</Button>
        </div>

        <p id="submit-help" className="visually-hidden">
          After submit you will be asked to confirm; then a ticket is created.
        </p>
      </form>

      <Modal
        open={open}
        modalHeading="Are you sure ?"
        primaryButtonText={saving ? "Saving…" : "Confirm"}
        secondaryButtonText="Cancel"
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={confirmAndSave}
        preventCloseOnClickOutside
      >
        <p>
          Please confirm your grievance details. You can’t edit on this step; you’ll get a ticket summary on the next screen.
        </p>
      </Modal>
    </main>
  );
}
