import {extendVariants, Checkbox} from "@nextui-org/react";

const MyCheckbox = extendVariants(Checkbox, {
  variants: {
    color: {
      default: {
        icon: "text-legoTealSection [&>polyline]:stroke-[6px]",
        wrapper: [
          "before:border-0 before:bg-legoTealInput",
          "after:bg-legoTealLight group-data-[hover=true]:before:bg-legoDarkest"
        ],
      },
      invalid: {
        wrapper: [
          "before:bg-legoTealInput",
          "after:bg-legoTealLight before:border-solid before:border-2 before:border-legoYellow"
        ],
        label: "!text-legoYellow",
      }
    },
    // isInvalid: {
    //   true: {
    //     wrapper: [
    //       "before:bg-legoTealInput",
    //       "before:border-solid before:border-2 before:border-legoYellow"
    //     ],
    //     label: "!text-legoYellow",
    //   }
    // }
  },
  defaultVariants: {
    color: "default",
  },
})

export default function CustomCheckbox(props : any) {
  return (
    <MyCheckbox 
      {...props}
    >
      {props.value}
    </MyCheckbox>
  )
}
