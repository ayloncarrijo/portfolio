import type { TFunction } from "next-i18next";
import * as yup from "yup";

export function applyYupLocale(translate: TFunction): void {
  yup.setLocale({
    mixed: {
      required: translate("yup.required"),
    },
    string: {
      email: translate("yup.email"),
    },
  });
}
