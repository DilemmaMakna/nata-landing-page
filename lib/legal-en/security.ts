// English translation of the Indonesian Data Security Policy (lib/legal-content.ts). The Indonesian version is the
// authoritative text; keep both in sync when either changes.
export const SECURITY_EN = `# Nataku Data Security Policy

**Effective:** 28 September 2026
**Last updated:** 22 October 2026
**Version:** 1.0

This document describes the technical and organizational measures applied by PT Masih Dilemma Makna (Lemma Bercerita), NIB 1105260028169, to protect the personal data of Nataku users. It complements the Privacy Policy and the Terms and Conditions of Service.

Operator: PT Masih Dilemma Makna, Jl. Jayadewata Blok N IX No. 28, Balumbang Jaya Village, Bogor Barat District, Bogor City, West Java Province, Indonesia. Security and DPO contact: hello@dilemma-makna.com

## 1. Security Principles

- **Data minimization:** we only collect data needed for core features (name, email, WhatsApp number, productivity data).
- **Least privilege:** each role can only access the data its work requires.
- **Security by design:** security is considered from the design of every new feature.
- **Transparency:** users are told what data is processed and about incidents that affect them.

## 2. Data Classification

| Category | Examples | Level of protection |
|---|---|---|
| Account identity | Name, email, WhatsApp number | High |
| Credentials | Password hash, session tokens | Very high |
| Productivity content | Tasks, class schedules, agenda, habits | High |
| Subscription data | Plan status, end date | Medium |
| Technical data | Error logs, app version | Medium |

We do not store card numbers, PINs, or digital wallet credentials. Payments are processed entirely by Google Play Billing.

## 3. Protection of Data in Transit

- All communication between the app and Nataku servers is encrypted with Transport Layer Security (TLS 1.3).
- Unencrypted connections are rejected or redirected to HTTPS. The app sends the HSTS header (max-age 1 year, including subdomains) on HTTPS responses.
- WhatsApp messages are sent through the official WhatsApp Business Platform channel. Once delivered to WhatsApp, message content falls under WhatsApp/Meta policies.

## 4. Protection of Stored Data

- User databases are stored in protected data centers with role-based access control (RBAC).
- Passwords are stored as bcrypt hashes and never in plain text.
- Data at rest and backups are stored on encrypted storage owned by the cloud provider.
- Infrastructure runs on Oracle Cloud and Google Cloud, located outside Indonesia.

## 5. Access Control

- Production access is limited to authorized personnel and restricted by role (RBAC).
- Development, testing, and production environments are separated. Real user data is not used in test environments without anonymization.
- Administrative access is logged (audit log) and reviewed periodically.
- Personnel access is revoked immediately when a role ends or employment is terminated.
- Personnel and partners who handle data are bound by confidentiality agreements.

## 6. Application and Development Security

- Input validation and sanitization to prevent injection and XSS.
- Rate limiting on the API and the WhatsApp message channel to prevent abuse and message flooding.
- Secrets (API keys, tokens) are stored outside the source code and rotated periodically.
- Regular dependency updates and vulnerability patching.
- Code review for changes that touch personal data.

## 7. Logging, Monitoring, and Backups

- Security and error logs are collected without unnecessary personal content.
- Errors and performance are monitored with Sentry.
- Backups are made daily and kept for 90 days.

## 8. Incident Response

1. **Detection and triage:** incidents are reported to hello@dilemma-makna.com or found through monitoring, then assessed for severity.
2. **Containment:** affected access or systems are isolated, and credentials are rotated where needed.
3. **Investigation:** determining the cause, the affected data, and the number of users.
4. **Notification:** if an incident results in a personal data protection failure, we notify affected users and the competent authority in writing within 3 x 24 hours of discovery, as required by PDP Law No. 27/2022. The notice includes the data exposed, the time and chronology, the impact, and the handling and recovery steps.
5. **Recovery and remediation:** systems are restored, followed by a post-incident review and preventive improvements.

## 9. Third-Party Management

- Service providers (cloud, WhatsApp, email, payments) are chosen based on their security and data protection commitments.
- Data processing agreements require confidentiality, security, and processing only on our instructions.
- List of providers: Resend (transactional email), Google Firebase Cloud Messaging (push notifications), Google Play Billing (payments), WhatsApp Business Platform/Meta or an official intermediary provider (WhatsApp reminders), and Sentry (error monitoring). Infrastructure providers: Oracle Cloud and Google Cloud, with processing outside Indonesia.
- We do not sell or rent user data for advertising.

## 10. Retention and Secure Deletion

- Users can delete their account through Settings > Delete Account.
- Personal data is deleted or anonymized within 30 days of deletion, and backups are deleted on a rolling basis within 90 days, unless there is a legal obligation to keep it longer.
- Deletion is performed in a way that prevents data recovery on production systems.

## 11. Safe Practices for Users

- Use a unique, strong password and do not share it.
- Make sure the WhatsApp number you register is your own.
- Log out on shared devices.
- Report immediately if you suspect your account was accessed by someone else.

We never ask for your password, OTP code, or PIN via WhatsApp, email, or phone.

## 12. Vulnerability Reporting

If you find a security flaw in Nataku, report it responsibly to hello@dilemma-makna.com with the subject "Security Report". Include a description, reproduction steps, and the impact. We will acknowledge the report and follow up. Please do not access other users' data, do not carry out attacks that disrupt the service, and allow reasonable time for a fix before public disclosure.

## 13. Review and Changes

This policy is reviewed at least every 12 months or when a significant system change occurs. Material changes are announced in the app or by email.

## 14. Contact

- Security and DPO: hello@dilemma-makna.com
- Website: dilemma-makna.com
- Phone/WhatsApp: +62 813-8360-0844
- PT Masih Dilemma Makna, Jl. Jayadewata Blok N IX No. 28, Balumbang Jaya Village, Bogor Barat District, Bogor City, West Java Province, Indonesia
`;
