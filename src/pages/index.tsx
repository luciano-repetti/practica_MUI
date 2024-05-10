import DefaultButton  from "@/components/buttons/DefaultButton";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Head from "next/head";

const Icon = ({ color }: { color?: string }) => {
    return (
        <svg width="15" height="11" viewBox="0 0 15 11" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d=
                "M7.5 0.25C3.7284 0.25 0.5 4.252 0.5 5.5C0.5 6.8065 2.9822 10.75 7.5 10.75C12.0178 10.75 14.5 
                6.8065 14.5 5.5C14.5 4.252 11.2716 0.25 7.5 0.25ZM7.5 7.75C7.08466 7.75 6.67865 7.61804 6.3333 7.37081C5.98796 7.12357 5.7188 6.77217 
                5.55985 6.36104C5.40091 5.9499 5.35932 5.4975 5.44035 5.06105C5.52138 4.62459 5.72139 4.22368 
                6.01508 3.90901C6.30877 3.59434 6.68295 3.38005 7.09031 3.29323C7.49767 3.20642 7.91991 3.25097 8.30364 3.42127C8.68736 3.59157 9.01534 3.87996 9.24609 
                4.24997C9.47684 4.61998 9.6 5.05499 9.6 5.5C9.6 6.09674 9.37875 6.66903 8.98492 7.09099C8.5911 7.51295 8.05695 7.75 7.5 7.75Z" fill={color} />
        </svg>
    );
}

const IconDescarga = ({ color }: { color?: string }) => {
    return (
    <svg width="14" height="15" viewBox="0 0 14 15" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M6.99998 10.6111C6.78725 10.6111 6.58324 10.5292 6.43282 10.3833C6.2824 10.2374 6.1979 10.0396 6.1979 9.83333V1.27778C6.1979 1.0715 6.2824 0.873667 6.43282 0.727806C6.58324 0.581944 6.78725 0.5 6.99998 0.5C7.21271 0.5 7.41672 0.581944 7.56714 0.727806C7.71756 0.873667 7.80206 1.0715 7.80206 1.27778V9.83333C7.80206 10.0396 7.71756 10.2374 7.56714 10.3833C7.41672 10.5292 7.21271 10.6111 6.99998 10.6111Z" fill="#F9FAFB"/>
        <path d="M6.99998 10.6111C6.78725 10.6111 6.58324 10.5292 6.43282 10.3833L3.22457 7.27211C3.14797 7.20036 3.08686 7.11454 3.04483 7.01965C3.00279 6.92476 2.98066 6.8227 2.97974 6.71942C2.97881 6.61615 2.99911 6.51373 3.03944 6.41815C3.07976 6.32256 3.13932 6.23572 3.21463 6.16269C3.28994 6.08966 3.3795 6.03191 3.47807 5.99281C3.57664 5.9537 3.68226 5.93402 3.78876 5.93492C3.89526 5.93581 4.00051 5.95727 4.09837 5.99803C4.19622 6.03879 4.28473 6.09805 4.35872 6.17233L6.99998 8.73356L9.64124 6.17233C9.79252 6.03065 9.99512 5.95226 10.2054 5.95403C10.4157 5.9558 10.6169 6.0376 10.7656 6.18181C10.9143 6.32601 10.9987 6.52109 11.0005 6.72502C11.0023 6.92895 10.9215 7.12542 10.7754 7.27211L7.56714 10.3833C7.41672 10.5292 7.21271 10.6111 6.99998 10.6111Z" fill="#F9FAFB"/>
        <path d="M11.0104 14.5H2.98956C2.35139 14.5 1.73935 14.2542 1.28809 13.8166C0.836828 13.379 0.583313 12.7855 0.583313 12.1667V9.83333C0.583313 9.62705 0.667818 9.42922 0.818238 9.28336C0.968658 9.1375 1.17267 9.05556 1.3854 9.05556C1.59812 9.05556 1.80213 9.1375 1.95255 9.28336C2.10297 9.42922 2.18748 9.62705 2.18748 9.83333V12.1667C2.18748 12.3729 2.27198 12.5708 2.4224 12.7166C2.57282 12.8625 2.77684 12.9444 2.98956 12.9444H11.0104C11.2231 12.9444 11.4271 12.8625 11.5776 12.7166C11.728 12.5708 11.8125 12.3729 11.8125 12.1667V9.83333C11.8125 9.62705 11.897 9.42922 12.0474 9.28336C12.1978 9.1375 12.4018 9.05556 12.6146 9.05556C12.8273 9.05556 13.0313 9.1375 13.1817 9.28336C13.3321 9.42922 13.4166 9.62705 13.4166 9.83333V12.1667C13.4166 12.7855 13.1631 13.379 12.7119 13.8166C12.2606 14.2542 11.6486 14.5 11.0104 14.5Z" fill={color}/>
    </svg>
    );
}
const IconCarrito = ({ color }: { color?: string }) => {
    return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1582 8.28212L14.6171 3.43173C14.648 3.32861 14.6534 3.22008 14.6326 3.11468C14.6119 3.00928 14.5657 2.90988 14.4977 2.82432C14.4297 2.73875 14.3417 2.66934 14.2406 2.62156C14.1396 2.57378 14.0283 2.54893 13.9154 2.54895H4.26457L3.83054 0.986435C3.78947 0.838484 3.69799 0.707608 3.57039 0.614225C3.44279 0.520843 3.28623 0.470206 3.12515 0.470215H1.5145C1.32103 0.470215 1.13549 0.543218 0.998689 0.673164C0.861888 0.803111 0.785034 0.979356 0.785034 1.16313C0.785034 1.3469 0.861888 1.52315 0.998689 1.65309C1.13549 1.78304 1.32103 1.85604 1.5145 1.85604H2.56347L3.00114 3.41856V3.42549V3.43173L4.46007 8.28212L5.00425 10.3512C4.64399 10.5029 4.33355 10.7442 4.10571 11.0496C3.87787 11.3551 3.74109 11.7133 3.7098 12.0864C3.67851 12.4596 3.75388 12.8338 3.92795 13.1697C4.10202 13.5055 4.36832 13.7905 4.69875 13.9945C5.02918 14.1984 5.41147 14.3139 5.80525 14.3286C6.19902 14.3433 6.58967 14.2568 6.93595 14.0781C7.28223 13.8994 7.57129 13.6352 7.7726 13.3134C7.97391 12.9915 8.08 12.6241 8.07967 12.2497C8.07725 12.0132 8.03184 11.7787 7.94545 11.5568H9.67282C9.58642 11.7787 9.54101 12.0132 9.53859 12.2497C9.53859 12.6609 9.66694 13.0628 9.9074 13.4046C10.1479 13.7465 10.4896 14.0129 10.8895 14.1702C11.2894 14.3276 11.7294 14.3687 12.1539 14.2885C12.5784 14.2083 12.9684 14.0103 13.2744 13.7196C13.5805 13.4289 13.7889 13.0585 13.8733 12.6553C13.9578 12.252 13.9144 11.8341 13.7488 11.4542C13.5832 11.0744 13.3027 10.7497 12.9428 10.5213C12.5829 10.2929 12.1598 10.171 11.727 10.171H6.46026L6.09553 8.78517H12.4564C12.6151 8.78521 12.7694 8.73612 12.8961 8.64535C13.0227 8.55457 13.1147 8.42705 13.1582 8.28212ZM11.727 11.5568C11.8713 11.5568 12.0123 11.5975 12.1323 11.6736C12.2522 11.7497 12.3457 11.858 12.4009 11.9846C12.4561 12.1112 12.4706 12.2505 12.4424 12.3849C12.4143 12.5193 12.3448 12.6428 12.2428 12.7397C12.1408 12.8366 12.0108 12.9026 11.8693 12.9293C11.7278 12.9561 11.5811 12.9424 11.4478 12.8899C11.3145 12.8375 11.2006 12.7487 11.1205 12.6347C11.0403 12.5208 10.9975 12.3868 10.9975 12.2497C10.9975 12.066 11.0744 11.8897 11.2112 11.7598C11.348 11.6298 11.5335 11.5568 11.727 11.5568ZM6.62074 12.2497C6.62074 12.3868 6.57796 12.5208 6.4978 12.6347C6.41765 12.7487 6.30372 12.8375 6.17043 12.8899C6.03714 12.9424 5.89047 12.9561 5.74897 12.9293C5.60746 12.9026 5.47749 12.8366 5.37547 12.7397C5.27345 12.6428 5.20398 12.5193 5.17583 12.3849C5.14768 12.2505 5.16213 12.1112 5.21734 11.9846C5.27255 11.858 5.36605 11.7497 5.48601 11.6736C5.60597 11.5975 5.747 11.5568 5.89128 11.5568C6.08474 11.5568 6.27028 11.6298 6.40709 11.7598C6.54389 11.8897 6.62074 12.066 6.62074 12.2497ZM10.2681 6.01352H9.53859V6.70643C9.53859 6.89021 9.46174 7.06645 9.32494 7.1964C9.18814 7.32634 9.0026 7.39935 8.80913 7.39935C8.61567 7.39935 8.43012 7.32634 8.29332 7.1964C8.15652 7.06645 8.07967 6.89021 8.07967 6.70643V6.01352H7.3502C7.15674 6.01352 6.9712 5.94052 6.8344 5.81057C6.6976 5.68062 6.62074 5.50438 6.62074 5.32061C6.62074 5.13684 6.6976 4.96059 6.8344 4.83064C6.9712 4.7007 7.15674 4.62769 7.3502 4.62769H8.07967V3.93478C8.07967 3.75101 8.15652 3.57476 8.29332 3.44482C8.43012 3.31487 8.61567 3.24187 8.80913 3.24187C9.0026 3.24187 9.18814 3.31487 9.32494 3.44482C9.46174 3.57476 9.53859 3.75101 9.53859 3.93478V4.62769H10.2681C10.4615 4.62769 10.6471 4.7007 10.7839 4.83064C10.9207 4.96059 10.9975 5.13684 10.9975 5.32061C10.9975 5.50438 10.9207 5.68062 10.7839 5.81057C10.6471 5.94052 10.4615 6.01352 10.2681 6.01352Z" fill="#F9FAFB"/>
    </svg>
    );
}


export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container component="main" maxWidth="xs" sx={{ display: "flex", flexDirection: "column", border: 3, boxShadow: 3, pb: 2 }}>
                <main>
                    <h1>Hello World!</h1>
                    <Button variant="outlined" sx={{ bgcolor: "#000", "&:hover": { bgcolor: "blue" } }}> Hazme click </Button>
                    <br />
                    <Button startIcon={<Icon />} variant="contained" disabled={false} sx={{
                        bgcolor: "#FF6319", color: "#fff", border: 3, borderColor: "#FF6319", borderRadius: "8px" ,
                        "& svg": { fill: "#fff" },
                        "&:hover": {
                            bgcolor: "#8A2C0D",
                            borderColor: "#FF9361",
                            color: "#FFC4A8",
                            "& svg": { fill: "#FFC4A8" }
                        },
                        "&:disabled": {
                            bgcolor: "#6B7280",
                            color: "#111928",
                            "& svg": { fill: "#111928" }
                        }
                    }}> Ver detalle </Button>

                    <DefaultButton icon={<Icon />} text="Pedrito es gay" variant="contained" disabled={false} styles={{
                        svgFill: "#fff",
                        bgColor: "#FF6319",
                        color:"#fff", 
                        border: 3,
                        borderRadius: "8px",
                        borderColor: "#FF6319",
                        bgColorHover: "#8A2C0D",
                        borderColorHover: "#FF9361",
                        colorHover: "#FFC4A8",
                        svgFillHover:"#FFC4A8",
                        borderColorDisable: "#6B7280",
                        svgColorDisable: "#111928",
                        bgColorDisable:"#6B7280",
                        colorDisable:"#111928",
                        
                    }} />
                    <br />
                    <br />
                    <DefaultButton icon={<IconDescarga />} text="Pedrito es gay" variant="contained" disabled={false} styles={{
                        svgFill: "#fff",
                        bgColor: "transparent",
                        color: "#fff",
                        border: 1,
                        borderRadius: "8px",
                        borderColor:"#fff",
                        bgColorHover:"#4B5563",
                        borderHover: 3,
                        borderColorHover: "#9CA3AF",
                        color: "#F9FAFB",
                        svgFillHover: "#F9FAFB",
                        bgColorDisable: "transparent",
                        colorDisable:"#6B7280",
                        borderColorDisable: "#6B7280",
                        svgColorDisable: "#6B7280"
                    }} />
                    <br />
                    <br />
                    <DefaultButton icon={<IconCarrito />} text="Pedrito es gay" variant="contained" disabled={false} styles={{
                        svgFill: "#fff",
                        bgColor: "transparent",
                        color: "#fff",
                        border: 1,
                        borderRadius: "8px",
                        borderColor:"#fff",
                        bgColorHover:"#4B5563",
                        borderHover: 3,
                        borderColorHover: "#9CA3AF",
                        color: "#F9FAFB",
                        svgFillHover: "#F9FAFB",
                        bgColorDisable: "transparent",
                        colorDisable:"#6B7280",
                        borderColorDisable: "#6B7280",
                        svgColorDisable: "#6B7280"
                    }} />

                </main>
            </Container>
        </>
    );
}
