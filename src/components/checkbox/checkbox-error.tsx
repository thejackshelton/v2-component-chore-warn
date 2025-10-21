import {
  type PropsOf,
  Slot,
  component$,
  useContext,
  useSignal,
  useTask$,
} from "@qwik.dev/core";
import { Render } from "../render/render";
import { checkboxContextId } from "./checkbox-context";

type PublicCheckboxErrorProps = PropsOf<"div">;

/** A component that displays error messages for a checkbox */
export const CheckboxError = component$((props: PublicCheckboxErrorProps) => {
  const context = useContext(checkboxContextId);
  const errorId = `${context.localId}-error`;
  const errorRef = useSignal<HTMLDivElement>();

  useTask$(() => {
    context.describedByIds.value = errorId;
  });

  return (
    // Identifier for the checkbox error message element
    <Render
      internalRef={errorRef}
      fallback="div"
      id={errorId}
      data-qds-checkbox-error
      {...props}
    >
      <Slot />
    </Render>
  );
});
