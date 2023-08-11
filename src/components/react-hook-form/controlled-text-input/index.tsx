import type { Optional } from "@ayloncarrijo/utilities";
import type {
  ComponentRef,
  PolymorphicProps,
  PolymorphicPropsWithRef,
  TextInputRootProps,
} from "@vista-ui/react";
import { TextInput, assignRef } from "@vista-ui/react";
import React from "react";
import {
  Controller,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

export type ControlledTextInputProps = React.ComponentProps<
  typeof ControlledTextInput
>;

export type ControlledTextInputRootProps<
  Values extends FieldValues = FieldValues,
  Name extends FieldPath<Values> = FieldPath<Values>
> = Optional<TextInputRootProps, "id"> & UseControllerProps<Values, Name>;

export const ControlledTextInput = React.forwardRef(
  function ControlledTextInput<
    Values extends FieldValues = FieldValues,
    Name extends FieldPath<Values> = FieldPath<Values>
  >(
    {
      onValueChange,
      onBlur,
      name,
      rules,
      shouldUnregister,
      defaultValue,
      control,
      ...props
    }: PolymorphicProps<ControlledTextInputRootProps<Values, Name>, "input">,
    ref: React.ForwardedRef<ComponentRef<"input">>
  ) {
    return (
      <Controller
        name={name}
        rules={rules}
        shouldUnregister={shouldUnregister}
        defaultValue={defaultValue}
        control={control}
        render={({ field, fieldState, formState }) => (
          <TextInput
            ref={assignRef(ref, field.ref)}
            id={field.name}
            name={field.name}
            value={field.value}
            error={fieldState.error?.message}
            disabled={formState.isSubmitting}
            onValueChange={(value) => {
              field.onChange(value);
              onValueChange?.(value);
            }}
            onBlur={(event) => {
              field.onBlur();
              onBlur?.(event);
            }}
            {...props}
          />
        )}
      />
    );
  }
) as {
  <
    As = "input",
    Values extends FieldValues = FieldValues,
    Name extends FieldPath<Values> = FieldPath<Values>
  >(
    props: PolymorphicPropsWithRef<
      ControlledTextInputRootProps<Values, Name>,
      As
    >
  ): React.ReactElement | null;
  (
    props: PolymorphicPropsWithRef<ControlledTextInputRootProps, "input">
  ): React.ReactElement | null;
};
