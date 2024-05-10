import { Button } from "@mui/material"

interface Props {
    icon?: React.ReactNode,
    variant: "contained" | "outlined" | "text",
    text: string,
    disabled: boolean,
    styles: StylesInterface
}

interface StylesInterface {
    bgColor: string,
    color: string,
    svgFill?: string,
    border: number | string,
    borderColor: string,
    borderRadius: number | string,
    bgColorHover: string,
    colorHover: string,
    borderHover?: number | string,
    borderColorHover: number | string,
    svgFillHover?: string,
    borderColorDisable?: string,
    bgColorDisable?: string,
    colorDisable?: string,
    svgColorDisable?: string
}

export default function DefaultButton(props: Props) {
    return (
        <Button startIcon={props.icon} variant={props.variant} disabled={props.disabled} sx={{
            transition: "all 0.1s ease",
            bgcolor: props.styles.bgColor,
            color: props.styles.color,
            border: props.styles.border,
            borderColor: props.styles.borderColor,
            borderRadius: props.styles.borderRadius,
            "& svg": {
                fill: props.styles.svgFill,
            },

            "&:hover": {
                bgcolor: props.styles.bgColorHover,
                color: props.styles.colorHover,
                border: props.styles.borderHover,
                borderColor: props.styles.borderColorHover,
                "& svg": {
                    fill: props.styles.svgFillHover,
                },
            },

            "&:disabled": {
                borderColor: props.styles.borderColorDisable,
                bgcolor: props.styles.bgColorDisable,
                color: props.styles.colorDisable,
                "& svg": {
                    fill: props.styles.svgColorDisable,
                },
            },
        }}> {props.text}</Button >

    )
}




