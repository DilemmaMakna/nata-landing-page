import type { LegalDocId } from '@/lib/legal-content';
import { PRIVACY_EN } from './privacy';
import { TERMS_EN } from './terms';
import { SECURITY_EN } from './security';

export const LEGAL_DOCS_EN: Record<LegalDocId, string> = {
  privacy: PRIVACY_EN,
  terms: TERMS_EN,
  security: SECURITY_EN,
};
