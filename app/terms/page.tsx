export default function TermsPage() {
  return (
    <div style={{ background: "#02040A", minHeight: "100vh" }}>
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ background: "linear-gradient(135deg, #E96D8D, #764BA2)" }}
        />
        <div className="relative">
          <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 16 }}>
            Legal
          </p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.08, marginBottom: 16 }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)" }}>
            Last updated: May 2025
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.8 }}>

          <div className="space-y-10">

            <div>
              <p>
                By downloading or using the CollegeSwipe app, these terms will automatically apply to you. Please read them carefully before using the app. The app and its content are the property of EZCLICKAI.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Use of the App</h2>
              <p>
                EZCLICKAI grants you a limited, non-exclusive, non-transferable license to use the CollegeSwipe app for your personal, non-commercial purposes. You may not copy, modify, distribute, sell, or lease any part of the app or its content, nor may you reverse engineer or attempt to extract the source code of the app.
              </p>
              <p className="mt-4">
                You agree not to use the app in any way that is unlawful or harmful to EZCLICKAI, its users, or any third party.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of any account credentials and for all activity that occurs under your account. You agree to provide accurate information when creating an account and to keep it up to date.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Accuracy of Information</h2>
              <p>
                CollegeSwipe provides college match scores, admission chance estimates, and scholarship information based on publicly available data and your self-reported profile. This information is for guidance only and does not constitute a guarantee of admission or scholarship eligibility. Always verify information directly with institutions.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Changes to the App</h2>
              <p>
                EZCLICKAI is committed to making CollegeSwipe as useful and efficient as possible. We reserve the right to modify or discontinue the app or any part of it at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the service.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, EZCLICKAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the app or reliance on any information provided within it.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Termination</h2>
              <p>
                EZCLICKAI reserves the right to terminate or suspend your access to the app at any time, without notice, if you breach these Terms of Service or for any other reason at our sole discretion.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will notify you of any changes by updating this page. Your continued use of the app after any changes constitutes your acceptance of the new terms.
              </p>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(107,159,255,0.06)", border: "1px solid rgba(107,159,255,0.15)" }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:Tristan@ezclickai.com" style={{ color: "#6B9FFF", textDecoration: "none" }}>Tristan@ezclickai.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
