import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 pt-10 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Coco Privacy Policy</h1>

        <div className="space-y-8 text-gray-300">
          <div className="text-sm space-y-2">
            <p>Updated: Dec 8, 2023</p>
            <p>Effective Date: Dec 8, 2023</p>
            <p>Version: V1.0</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              Purpose of this Privacy Policy
            </h2>
            <div className="text-sm space-y-4">
              <p>
                Coco is committed to protecting your privacy. We
                have prepared this Privacy Policy to describe to you our
                practices regarding the Personal Data (as defined below) we
                collect from users of our website located at coco.rs and
                in connection with our other INFINI Labs products and services (the
                &ldquo;Products&rdquo;).
              </p>
              <p>
                This website and our Products are not intended for children and
                we do not knowingly collect data relating to children. It is
                important that you read this Privacy Policy together with any
                other privacy notice or fair processing notice we may provide on
                specific occasions when we are collecting or processing Personal
                Data about you so that you are fully aware of how and why we are
                using your data.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Information Collection</h2>
            <p className="text-sm">
              We may collect your personal information, including your name,
              contact information, email address and etc. We only collect
              information that is relevant to our services and only with your
              explicit consent or as permitted by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Information Usage</h2>
            <div className="text-sm space-y-2">
              <p>
                We only use your personal information to provide and improve our
                services. Your personal information may be used for the
                following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  To contact you and respond to your inquiries and requests;
                </li>
                <li>
                  To send you information and promotional activities related to
                  your interests;
                </li>
                <li>To analyze and improve our services;</li>
                <li>To comply with applicable laws and regulations.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Information Protection</h2>
            <p className="text-sm">
              We will take appropriate security measures to protect your
              personal information from unauthorized access, use, or disclosure.
              However, please note that internet data transmission is not
              completely secure, and therefore, we cannot guarantee the absolute
              security of information transmitted over the internet.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Information Sharing</h2>
            <p className="text-sm">
              We will not disclose your personal information to third parties
              without your explicit consent unless required by law or necessary
              for providing our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              Cookies and Similar Technologies
            </h2>
            <p className="text-sm">
              Our website/application may use cookies and similar technologies
              to collect and store certain information. You can control or
              reject cookies in your browser settings, but this may affect your
              use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Third-Party Links</h2>
            <p className="text-sm">
              Our services may contain links to third-party websites or
              services. We are not responsible for the privacy practices of
              these third-party websites. We encourage you to review the privacy
              statements of third-party websites after leaving our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Privacy Policy Updates</h2>
            <p className="text-sm">
              We reserve the right to update this privacy statement at any time.
              We will provide notice of any significant updates through our
              website/application/service. Please regularly review this privacy
              statement to understand how we protect your personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Contact and Feedback</h2>
            <div className="text-sm space-y-4">
              <p>
                If you have any questions or feedback regarding our Privacy
                Policy, you can contact us using the following methods:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 pr-4 font-medium">Email</td>
                      <td className="py-2">hello@infini.ltd</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 pr-4 font-medium">Discord</td>
                      <td className="py-2">https://discord.gg/4tKTMkkvVX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                We will generally respond to relevant questions within fifteen
                working days. If the issues and situations involved are complex
                and require longer processing time, we will also inform you in
                time.
              </p>
              <p>
                If the user is not satisfied with our response, they can
                complain to us through the aforementioned methods, and we will
                handle it and give a reply within fifteen working days. If the
                matter involved in the complaint is more complex, it may take
                longer and we will inform you in time. You can also complain to
                the relevant regulatory authorities in your region, or contact
                us, and we will provide possible complaint channels based on
                your actual situation.
              </p>
              <p className="mt-8 italic">
                Thank you for reading our privacy statement and trusting us with
                your personal information.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
