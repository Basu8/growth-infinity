export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-2">a. Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name and address</li>
              <li>Billing and payment details</li>
              <li>Other details provided voluntarily through forms, surveys, or communication</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-800 mb-2">b. Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring URLs</li>
              <li>Device information</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-800 mb-2">c. Cookies & Tracking Technologies</h3>
            <p className="text-gray-700">
              We use cookies and similar technologies to improve user experience, track website performance, and deliver personalized marketing.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide and manage our services</li>
              <li>Communicate with you (e.g., newsletters, campaigns, updates)</li>
              <li>Process payments and transactions</li>
              <li>Analyze website usage and improve performance</li>
              <li>Deliver targeted advertisements and content</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing of Information</h2>
            <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Trusted third-party vendors (e.g., payment processors, email marketing platforms, analytics providers)</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners, if relevant to service delivery (with your consent)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your data. While no method of transmission or storage is 100% secure, 
              we strive to safeguard your personal information from unauthorized access, disclosure, or misuse.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="text-gray-700">
              To exercise any of these rights, please contact us at:
              <a href="mailto:privacy@growthinfinity.com" className="text-blue-600 hover:underline ml-1">
                privacy@growthinfinity.com
              </a>
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those websites. 
              We encourage you to read their privacy policies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal data from children.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. All updates will be posted on this page with a revised effective date. 
              We encourage you to review this policy periodically.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 mb-2">For any questions or concerns regarding this Privacy Policy, contact:</p>
            <p className="text-gray-700 mb-1">Growth Infinity</p>
            <p className="text-gray-700 mb-1">
              Email: <a href="mailto:support@growthinfinity.com" className="text-blue-600 hover:underline">support@growthinfinity.com</a>
            </p>
            <p className="text-gray-700 mb-1">
              Website: <a href="https://www.growthinfinity.com" className="text-blue-600 hover:underline">www.growthinfinity.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}