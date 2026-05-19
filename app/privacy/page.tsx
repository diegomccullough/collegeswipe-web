export default function PrivacyPage() {
  return (
    <div style={{ background: "#02040A", minHeight: "100vh" }}>
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ background: "linear-gradient(135deg, #764BA2, #6B9FFF)" }}
        />
        <div className="relative">
          <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 16 }}>
            Legal
          </p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.08, marginBottom: 16 }}>
            Privacy Policy
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
                This privacy policy applies to the CollegeSwipe app (hereby referred to as &ldquo;Application&rdquo;) for mobile devices that was created by EZCLICKAI (hereby referred to as &ldquo;Service Provider&rdquo;) as a free service. This service is intended for use as described below.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Information Collection and Use</h2>
              <p>
                The Application collects information when you download and use it. This information may include your device&rsquo;s Internet Protocol address, the pages of the Application you visit, the time and date of your visit, and the time spent on those pages.
              </p>
              <p className="mt-4">
                The Application does not gather precise information about the location of your mobile device.
              </p>
              <p className="mt-4">
                The Service Provider may use the information you provide to contact you from time to time with important information, required notices, and marketing promotions.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Third Party Access</h2>
              <p>
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways described in this privacy statement.
              </p>
              <p className="mt-4">
                The Service Provider may disclose User Provided and Automatically Collected Information in the following circumstances: as required by law; when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Opt-Out Rights</h2>
              <p>
                You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Data Retention Policy</h2>
              <p>
                The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you&rsquo;d like them to delete User Provided Data that you have provided via the Application, please contact them at{" "}
                <a href="mailto:Tristan@ezclickai.com" style={{ color: "#6B9FFF", textDecoration: "none" }}>Tristan@ezclickai.com</a>{" "}
                and they will respond in a reasonable time.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Children</h2>
              <p>
                The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application is designed for high school students; users under 13 should obtain parental consent before use.
              </p>
              <p className="mt-4">
                If a parent or guardian becomes aware that their child has provided personal information without their consent, they should contact the Service Provider at{" "}
                <a href="mailto:Tristan@ezclickai.com" style={{ color: "#6B9FFF", textDecoration: "none" }}>Tristan@ezclickai.com</a>{" "}
                so that the necessary actions can be taken.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Security</h2>
              <p>
                The Service Provider is committed to safeguarding the confidentiality of your information. They provide physical, electronic, and procedural safeguards to protect the information they process and maintain.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Changes to This Policy</h2>
              <p>
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
              </p>
              <p className="mt-4">
                This privacy policy is effective as of May 2025 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              </p>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(107,159,255,0.06)", border: "1px solid rgba(107,159,255,0.15)" }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>Contact Us</h2>
              <p>
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at{" "}
                <a href="mailto:Tristan@ezclickai.com" style={{ color: "#6B9FFF", textDecoration: "none" }}>Tristan@ezclickai.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
