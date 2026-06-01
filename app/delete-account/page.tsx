export default function DeleteAccountPage() {
  return (
    <div style={{ background: "#02040A", minHeight: "100vh" }}>
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ background: "linear-gradient(135deg, #764BA2, #6B9FFF)" }}
        />
        <div className="relative">
          <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 16 }}>
            Account
          </p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.08, marginBottom: 16 }}>
            Delete Your Account
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)" }}>
            How to permanently delete your CollegeSwipe account and data
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.8 }}>
          <div className="space-y-10">

            <div>
              <p>
                You may request permanent deletion of your CollegeSwipe account and all associated personal data at any time. Once deleted, your account and data cannot be recovered.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>How to Delete Your Account</h2>
              <p style={{ marginBottom: 16 }}>You can delete your account in two ways:</p>

              <div
                className="rounded-2xl p-6 mb-6"
                style={{ background: "rgba(107,159,255,0.06)", border: "1px solid rgba(107,159,255,0.15)" }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 10 }}>Option 1 — Delete in the App</h3>
                <ol style={{ paddingLeft: 20, margin: 0 }}>
                  <li style={{ marginBottom: 6 }}>Open the <strong style={{ color: "#fff" }}>CollegeSwipe</strong> app on your device.</li>
                  <li style={{ marginBottom: 6 }}>Tap your <strong style={{ color: "#fff" }}>profile icon</strong> in the top corner.</li>
                  <li style={{ marginBottom: 6 }}>Go to <strong style={{ color: "#fff" }}>Settings</strong>.</li>
                  <li style={{ marginBottom: 6 }}>Tap <strong style={{ color: "#fff" }}>Delete Account</strong>.</li>
                  <li>Confirm the deletion when prompted.</li>
                </ol>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(107,159,255,0.06)", border: "1px solid rgba(107,159,255,0.15)" }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 10 }}>Option 2 — Request via Email</h3>
                <p>
                  Send an email to{" "}
                  <a href="mailto:tristan@ezclickai.com" style={{ color: "#6B9FFF", textDecoration: "none" }}>tristan@ezclickai.com</a>{" "}
                  with the subject line <strong style={{ color: "#fff" }}>&ldquo;Account Deletion Request&rdquo;</strong> and include the email address associated with your account. We will process your request within <strong style={{ color: "#fff" }}>7 business days</strong>.
                </p>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>What Gets Deleted</h2>
              <p style={{ marginBottom: 12 }}>When your account is deleted, we permanently remove:</p>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>Your profile information (name, email, school preferences)</li>
                <li style={{ marginBottom: 6 }}>Your swipe history and saved colleges</li>
                <li style={{ marginBottom: 6 }}>Any messages or connections made through the app</li>
                <li>All other personal data associated with your account</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Data Retention After Deletion</h2>
              <p>
                Deletion is permanent and irreversible. Some anonymized or aggregated data (which cannot be used to identify you) may be retained for analytical purposes. Certain records may also be retained for a limited period if required for legal, security, fraud prevention, or operational reasons.
              </p>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(107,159,255,0.06)", border: "1px solid rgba(107,159,255,0.15)" }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Contact Us</h2>
              <p>
                If you have questions about account deletion or data privacy, contact us at{" "}
                <a href="mailto:tristan@ezclickai.com" style={{ color: "#6B9FFF", textDecoration: "none" }}>tristan@ezclickai.com</a>.
              </p>
            </div>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>Last updated: June 1, 2026</p>

          </div>
        </div>
      </section>
    </div>
  )
}
