import * as Select from "@radix-ui/react-select";
// import { globalData } from "@/global-data";
// import { useRouter } from "next/router";

// export function LanguageSelector(): JSX.Element {
//   const router = useRouter();

//   const setLanguage = (locale: string): void => {
//     void router.push(router.pathname, router.asPath, { locale, scroll: false });
//   };

//   return (
//     <div>
//       {globalData.languages.map(({ title, locale }) => (
//         <button
//           key={locale}
//           type="button"
//           onClick={() => {
//             setLanguage(locale);
//           }}
//           style={{ fontWeight: router.locale === locale ? "bold" : "normal" }}
//         >
//           {title}
//         </button>
//       ))}
//     </div>
//   );
// }

import { globalData } from "@/global-data";
import type { Optional } from "@ayloncarrijo/utilities";
import {
  Box,
  forwardRef,
  Icon,
  IconButton,
  type IconButtonRootProps,
} from "@vista-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import type React from "react";

export type LanguageSelectorProps = React.ComponentProps<
  typeof LanguageSelector
>;

export type LanguageSelectorRootProps = Optional<IconButtonRootProps, "label">;

export const LanguageSelector = forwardRef<LanguageSelectorRootProps, "button">(
  (props, ref) => {
    const { t: translate } = useTranslation();

    const router = useRouter();

    const setLanguage = (locale: string): void => {
      void router.push(
        { pathname: router.pathname, query: router.query },
        router.asPath,
        { locale, scroll: false }
      );
    };

    return (
      <Select.Root value={router.locale} onValueChange={setLanguage}>
        <Select.Trigger asChild>
          <IconButton label={translate("selectLanguage")} {...props}>
            translate
          </IconButton>
        </Select.Trigger>
        <Select.Content position="popper" sideOffset={8}>
          <Box
            css={{
              width: "$128",
              py: "$4",
              backgroundColor: "$surfaceContainerHigh",
              borderRadius: "$sm",
              boxShadow: "$elevation2",
              overflow: "hidden",
            }}
          >
            {globalData.languages.map(({ title, locale }) => (
              <Select.Item key={locale} value={locale}>
                <Box
                  css={{
                    px: "$12",
                    py: "$8",
                    typography: "$labelLg",
                    color:
                      locale === router.locale
                        ? "$onSecondaryContainer"
                        : "$onSurfaceVariant",
                    backgroundColor:
                      locale === router.locale
                        ? "$secondaryContainer"
                        : undefined,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <Select.ItemText>{title}</Select.ItemText>
                  {locale === router.locale && <Icon size="sm">check</Icon>}
                </Box>
              </Select.Item>
            ))}
          </Box>
        </Select.Content>
      </Select.Root>
    );
  }
);
