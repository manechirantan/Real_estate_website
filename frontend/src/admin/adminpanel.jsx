import { useState, useEffect } from "react";

const BASE = "http://localhost:5000";

function req(path, method = "GET", body) {
  return fetch(BASE + path, {
    method,
    credentials: "include",
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  }).then((r) => r.json());
}

function Input({ label, value, onChange, big }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>{label}</div>
      {big ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          style={inp}
        />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} style={inp} />
      )}
    </div>
  );
}

function SaveBtn({ onClick, saving }) {
  return (
    <button onClick={onClick} disabled={saving} style={saveBtnStyle}>
      {saving ? "Saving…" : "Save"}
    </button>
  );
}

function RowList({ rows, fields, onChange }) {
  const update = (i, key, val) => {
    const next = [...rows];
    next[i] = { ...next[i], [key]: val };
    onChange(next);
  };
  const remove = (i) => onChange(rows.filter((_, idx) => idx !== i));
  const add = () => onChange([...rows, Object.fromEntries(fields.map((f) => [f.key, ""]))]);

  return (
    <div>
      {rows.map((row, i) => (
        <div key={i} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12, marginBottom: 10, background: "#fafafa" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "#aaa" }}>#{i + 1}</span>
            <button onClick={() => remove(i)} style={{ background: "none", border: "none", color: "#f66", cursor: "pointer", fontSize: 13 }}>Remove</button>
          </div>
          {fields.map((f) => (
            <Input key={f.key} label={f.label} big={f.big} value={row[f.key] || ""} onChange={(v) => update(i, f.key, v)} />
          ))}
        </div>
      ))}
      <button onClick={add} style={{ background: "none", border: "1px dashed #ccc", borderRadius: 6, padding: "7px 16px", cursor: "pointer", color: "#666", fontSize: 13 }}>+ Add</button>
    </div>
  );
}

//sections

function Hero({ data, onChange, onSave, saving }) {
  const s = (k) => (v) => onChange({ ...data, [k]: v });
  return (
    <div>
      <Input label="Tagline" value={data.tagline} onChange={s("tagline")} />
      <Input label="Sub Tagline" value={data.subTagline} onChange={s("subTagline")} />
      <Input label="Project Name" value={data.projectName} onChange={s("projectName")} />
      <Input label="Address" value={data.address} onChange={s("address")} big />
      <Input label="Type 1" value={data.Type} onChange={s("Type")} />
      <Input label="Price 1" value={data.Price} onChange={s("Price")} />
      <Input label="Type 2" value={data.Type2} onChange={s("Type2")} />
      <Input label="Price 2" value={data.Price2} onChange={s("Price2")} />
      <SaveBtn onClick={onSave} saving={saving} />
    </div>
  );
}

function ProjectOverview({ data, onChange, onSave, saving }) {
  const s = (k) => (v) => onChange({ ...data, [k]: v });
  return (
    <div>
      <Input label="Heading" value={data.heading} onChange={s("heading")} />
      <Input label="Description" value={data.description} onChange={s("description")} big />
      <Input label="Brochure Button Text" value={data.brochure} onChange={s("brochure")} />
      <SaveBtn onClick={onSave} saving={saving} />
    </div>
  );
}

function NearbyConnectivity({ data, onChange, onSave, saving }) {
  return (
    <div>
      <Input label="Heading" value={data.heading} onChange={(v) => onChange({ ...data, heading: v })} />
      <RowList
        rows={data.items}
        fields={[{ key: "place", label: "Place" }, { key: "distance", label: "Distance" }]}
        onChange={(items) => onChange({ ...data, items })}
      />
      <div style={{ marginTop: 14 }}><SaveBtn onClick={onSave} saving={saving} /></div>
    </div>
  );
}

function Amenities({ data, onChange, onSave, saving }) {
  return (
    <div>
      <Input label="Heading" value={data.heading} onChange={(v) => onChange({ ...data, heading: v })} />
      <Input label="Sub Heading" value={data.subheading} onChange={(v) => onChange({ ...data, subheading: v })} />
      <RowList
        rows={data.items}
        fields={[{ key: "title", label: "Title" }, { key: "description", label: "Description", big: true }]}
        onChange={(items) => onChange({ ...data, items })}
      />
      <div style={{ marginTop: 14 }}><SaveBtn onClick={onSave} saving={saving} /></div>
    </div>
  );
}

function FloorPlans({ data, onChange, onSave, saving }) {
  return (
    <div>
      <Input label="Heading" value={data.heading} onChange={(v) => onChange({ ...data, heading: v })} />
      <RowList
        rows={data.items}
        fields={[
          { key: "wing", label: "Wing" },
          { key: "bhkType", label: "BHK Type" },
          { key: "area", label: "Area" },
          { key: "price", label: "Price" },
        ]}
        onChange={(items) => onChange({ ...data, items })}
      />
      <div style={{ marginTop: 14 }}><SaveBtn onClick={onSave} saving={saving} /></div>
    </div>
  );
}

function AboutDeveloper({ data, onChange, onSave, saving }) {
  const s = (k) => (v) => onChange({ ...data, [k]: v });
  return (
    <div>
      <Input label="Heading" value={data.heading} onChange={s("heading")} />
      <Input label="Description" value={data.description} onChange={s("description")} big />
      <Input label="Stat 1" value={data.Label1} onChange={s("Label1")} />
      <Input label="Stat 2" value={data.Label2} onChange={s("Label2")} />
      <Input label="Stat 3" value={data.Label3} onChange={s("Label3")} />
      <Input label="Stat 4" value={data.Label4} onChange={s("Label4")} />
      <SaveBtn onClick={onSave} saving={saving} />
    </div>
  );
}

function Construction({ data, onChange, onSave, saving }) {
  return (
    <div>
      <Input label="Heading" value={data.heading} onChange={(v) => onChange({ ...data, heading: v })} />
      <RowList
        rows={data.items}
        fields={[{ key: "title", label: "Title" }, { key: "description", label: "Description", big: true }]}
        onChange={(items) => onChange({ ...data, items })}
      />
      <div style={{ marginTop: 14 }}><SaveBtn onClick={onSave} saving={saving} /></div>
    </div>
  );
}

function FAQ({ data, onChange, onSave, saving }) {
  return (
    <div>
      <Input label="Heading" value={data.heading} onChange={(v) => onChange({ ...data, heading: v })} />
      <RowList
        rows={data.items}
        fields={[{ key: "question", label: "Question" }, { key: "answer", label: "Answer", big: true }]}
        onChange={(items) => onChange({ ...data, items })}
      />
      <div style={{ marginTop: 14 }}><SaveBtn onClick={onSave} saving={saving} /></div>
    </div>
  );
}

//login

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const login = async () => {
    const res = await fetch(`${BASE}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pass }),
    });
    if (res.ok) onLogin();
    else setErr("Wrong email or password");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
      <div style={{ background: "#fff", padding: 32, borderRadius: 12, width: 320, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 20 }}>Admin Login</h2>
        <p style={{ margin: "0 0 20px", color: "#888", fontSize: 13 }}>Megaplex Prime Infinity</p>
        <Input label="Email" value={email} onChange={setEmail} />
        <Input label="Password" value={pass} onChange={setPass} />
        {err && <p style={{ color: "red", fontSize: 13, margin: "0 0 12px" }}>{err}</p>}
        <button onClick={login} style={{ ...saveBtnStyle, width: "100%" }}>Login</button>
      </div>
    </div>
  );
}

//main app

const TABS = [
  { id: "hero", label: "Hero" },
  { id: "projectOverview", label: "Project" },
  { id: "nearbyConnectivity", label: "Nearby" },
  { id: "amenities", label: "Amenities" },
  { id: "floorPlans", label: "Floor Plans" },
  { id: "aboutDeveloper", label: "Developer" },
  { id: "constructionUpdates", label: "Construction" },
  { id: "faq", label: "FAQ" },
];

const ENDPOINTS = {
  hero: "hero",
  projectOverview: "project-overview",
  nearbyConnectivity: "nearby-connectivity",
  amenities: "amenities",
  floorPlans: "floor-plans",
  aboutDeveloper: "about-developer",
  constructionUpdates: "construction-updates",
  faq: "faq",
};

const SECTIONS = {
  hero: Hero,
  projectOverview: ProjectOverview,
  nearbyConnectivity: NearbyConnectivity,
  amenities: Amenities,
  floorPlans: FloorPlans,
  aboutDeveloper: AboutDeveloper,
  constructionUpdates: Construction,
  faq: FAQ,
};

export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [content, setContent] = useState(null);
  const [tab, setTab] = useState("hero");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    req("/auth/me").then((d) => setLoggedIn(d.loggedIn));
  }, []);

  useEffect(() => {
    if (loggedIn) req("/content").then(setContent);
  }, [loggedIn]);

  const save = async () => {
    setSaving(true);
    await req(`/content/${ENDPOINTS[tab]}`, "PATCH", content[tab]);
    setSaving(false);
    setToast("Saved!");
    setTimeout(() => setToast(""), 2000);
  };

  const logout = async () => {
    await req("/auth/logout", "POST");
    setLoggedIn(false);
  };

  if (loggedIn === null) return null;
  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;
  if (!content) return <p style={{ padding: 40 }}>Loading…</p>;

  const SectionComp = SECTIONS[tab];

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      <div style={{ width: 180, background: "#111", padding: "24px 0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, padding: "0 20px 20px", fontSize: 15 }}>Admin</div>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "10px 20px", background: tab === t.id ? "#222" : "none",
                border: "none", color: tab === t.id ? "#fff" : "#aaa",
                cursor: "pointer", fontSize: 14,
                borderLeft: tab === t.id ? "3px solid #fff" : "3px solid transparent",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button onClick={logout} style={{ margin: "0 16px", padding: "8px", background: "none", border: "1px solid #444", color: "#aaa", borderRadius: 6, cursor: "pointer", fontSize: 13 }}>
          Logout
        </button>
      </div>

      
      <div style={{ flex: 1, padding: 32, background: "#f9f9f9", overflowY: "auto" }}>
        <h2 style={{ margin: "0 0 24px", fontSize: 18 }}>{TABS.find((t) => t.id === tab)?.label}</h2>
        <div style={{ background: "#fff", borderRadius: 10, padding: 24, maxWidth: 680, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <SectionComp
            data={content[tab]}
            onChange={(val) => setContent({ ...content, [tab]: val })}
            onSave={save}
            saving={saving}
          />
        </div>
      </div>

      {toast && (
        <div style={{ position: "fixed", bottom: 20, right: 20, background: "#111", color: "#fff", padding: "10px 18px", borderRadius: 8, fontSize: 14 }}>
          {toast}
        </div>
      )}
    </div>
  );
}

//style
const inp = {
  width: "100%", padding: "8px 10px", border: "1px solid #ddd",
  borderRadius: 6, fontSize: 14, boxSizing: "border-box",
  fontFamily: "sans-serif", background: "#fff", outline: "none",
};

const saveBtnStyle = {
  background: "#111", color: "#fff", border: "none",
  padding: "9px 22px", borderRadius: 7, cursor: "pointer", fontSize: 14,
};