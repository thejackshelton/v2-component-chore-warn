import {
  type PropsOf,
  Slot,
  component$,
  useConstant,
  useContext,
  useTask$,
} from "@qwik.dev/core";
import { Render } from "../render/render";
import { checkboxContextId } from "./checkbox-context";
type PublicCheckboxDescriptionProps = PropsOf<"div">;
/** A component that renders the description text for a checkbox */
export const CheckboxDescription = component$(
  (props: PublicCheckboxDescriptionProps) => {
    const context = useContext(checkboxContextId);
    const descriptionId = `${context.localId}-description`;

    return (
      // Identifier for the checkbox description element
      <Render
        fallback="div"
        id={descriptionId}
        data-qds-checkbox-description
        {...props}
      >
        <Slot />
      </Render>
    );
  }
);
