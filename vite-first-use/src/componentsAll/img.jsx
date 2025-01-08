function Img(props) {
  const images = {
    homeIconBlue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.9902V14.9902" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    homeIconGrey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.9902V14.9902" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    productIconGrey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8H21" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    productIconBlue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8H21" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    companyIconGrey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8V13" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8V13" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 13V17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    companyIconBlue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8V13" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8V13" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 13V17" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    keepIconGrey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22H22" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.9502 22.0003L3.0002 9.97023C3.0002 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16.25V17.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 7.5H13.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    keepIconBlue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22H22" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.9502 22.0003L3.0002 9.97023C3.0002 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
<path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16.25V17.75" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 7.5H13.5" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    prefessionalIconGrey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1404 21.6198C17.2604 21.8798 16.2204 21.9998 15.0004 21.9998H9.00035C7.78035 21.9998 6.74035 21.8798 5.86035 21.6198C6.08035 19.0198 8.75035 16.9697 12.0004 16.9697C15.2504 16.9697 17.9204 19.0198 18.1404 21.6198Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    prefessionalIconBlue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1404 21.6198C17.2604 21.8798 16.2204 21.9998 15.0004 21.9998H9.00035C7.78035 21.9998 6.74035 21.8798 5.86035 21.6198C6.08035 19.0198 8.75035 16.9697 12.0004 16.9697C15.2504 16.9697 17.9204 19.0198 18.1404 21.6198Z" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    refreshIconGrey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    refreshIconBlue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    archiveIconGrey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V8L14 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8L10 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    archiveIconBlue: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V8L14 6" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8L10 6" stroke="#5565FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004" stroke="#5565FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    dollarArrow: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.833 22.917C15.833 24.5337 17.083 25.8337 18.6164 25.8337H21.7497C23.083 25.8337 24.1663 24.7004 24.1663 23.2837C24.1663 21.767 23.4997 21.2171 22.5164 20.8671L17.4997 19.1171C16.5163 18.7671 15.8497 18.2337 15.8497 16.7004C15.8497 15.3004 16.933 14.1504 18.2663 14.1504H21.3997C22.933 14.1504 24.183 15.4504 24.183 17.0671" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12.5V27.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6663 19.9997C36.6663 29.1997 29.1997 36.6663 19.9997 36.6663C10.7997 36.6663 3.33301 29.1997 3.33301 19.9997C3.33301 10.7997 10.7997 3.33301 19.9997 3.33301" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.333 5V11.6667H34.9997" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6663 3.33301L28.333 11.6663" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    receiptItem: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.667 9.99967V14.033C36.667 16.6663 35.0003 18.333 32.367 18.333H26.667V6.683C26.667 4.833 28.1837 3.33301 30.0337 3.33301C31.8503 3.34967 33.517 4.083 34.717 5.283C35.917 6.49967 36.667 8.16634 36.667 9.99967Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 11.6663V34.9997C3.33301 36.383 4.89967 37.1663 5.99967 36.333L8.84967 34.1997C9.51634 33.6997 10.4497 33.7663 11.0497 34.3663L13.8163 37.1497C14.4663 37.7997 15.533 37.7997 16.183 37.1497L18.983 34.3497C19.5663 33.7663 20.4997 33.6997 21.1497 34.1997L23.9997 36.333C25.0997 37.1497 26.6663 36.3663 26.6663 34.9997V6.66634C26.6663 4.83301 28.1663 3.33301 29.9997 3.33301H11.6663H9.99967C4.99967 3.33301 3.33301 6.31634 3.33301 9.99967V11.6663Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21.6836H20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15.0166H20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99219 21.667H10.0072" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99219 15H10.0072" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    emptyWallet: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.067 22.5836C29.367 23.267 28.967 24.2503 29.067 25.3003C29.217 27.1003 30.867 28.417 32.667 28.417H35.8337V30.4003C35.8337 33.8503 33.017 36.667 29.567 36.667H12.717C13.2337 36.2337 13.6837 35.7003 14.0337 35.1003C14.6503 34.1003 15.0003 32.917 15.0003 31.667C15.0003 27.9837 12.017 25.0003 8.33366 25.0003C6.76699 25.0003 5.31699 25.5503 4.16699 26.467V19.1837C4.16699 15.7337 6.98366 12.917 10.4337 12.917H29.567C33.017 12.917 35.8337 15.7337 35.8337 19.1837V21.5837H32.467C31.5337 21.5837 30.6837 21.9503 30.067 22.5836Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.16699 20.6832V13.0666C4.16699 11.0833 5.38365 9.31652 7.23365 8.61652L20.467 3.61652C22.5337 2.83319 24.7503 4.36657 24.7503 6.58324V12.9166" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5983 23.2839V26.7173C37.5983 27.634 36.865 28.3839 35.9317 28.4173H32.665C30.865 28.4173 29.215 27.1006 29.065 25.3006C28.965 24.2506 29.365 23.2673 30.065 22.5839C30.6817 21.9506 31.5317 21.584 32.465 21.584H35.9317C36.865 21.6173 37.5983 22.3672 37.5983 23.2839Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.667 20H23.3337" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0003 31.6667C15.0003 32.9167 14.6503 34.1 14.0337 35.1C13.6837 35.7 13.2337 36.2333 12.717 36.6667C11.5503 37.7167 10.017 38.3333 8.33366 38.3333C5.90033 38.3333 3.78366 37.0333 2.63366 35.1C2.017 34.1 1.66699 32.9167 1.66699 31.6667C1.66699 29.5667 2.63366 27.6833 4.16699 26.4667C5.31699 25.55 6.76699 25 8.33366 25C12.017 25 15.0003 27.9833 15.0003 31.6667Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.8202 31.6328H5.85352" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33398 29.1992V34.1825" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    receiptMinus: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.667 9.99967V14.033C36.667 16.6663 35.0003 18.333 32.367 18.333H26.667V6.683C26.667 4.833 28.1837 3.33301 30.0337 3.33301C31.8503 3.34967 33.517 4.083 34.717 5.283C35.917 6.49967 36.667 8.16634 36.667 9.99967Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 11.6663V34.9997C3.33301 36.383 4.89967 37.1663 5.99967 36.333L8.84967 34.1997C9.51634 33.6997 10.4497 33.7663 11.0497 34.3663L13.8163 37.1497C14.4663 37.7997 15.533 37.7997 16.183 37.1497L18.983 34.3497C19.5663 33.7663 20.4997 33.6997 21.1497 34.1997L23.9997 36.333C25.0997 37.1497 26.6663 36.3663 26.6663 34.9997V6.66634C26.6663 4.83301 28.1663 3.33301 29.9997 3.33301H11.6663H9.99967C4.99967 3.33301 3.33301 6.31634 3.33301 9.99967V11.6663Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.417 16.667H19.5837" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    dollarCircle: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4531 23.8834C14.4531 26.0334 16.1031 27.7667 18.1531 27.7667H22.3365C24.1198 27.7667 25.5698 26.2501 25.5698 24.3834C25.5698 22.3501 24.6865 21.6334 23.3698 21.1667L16.6531 18.8334C15.3365 18.3667 14.4531 17.6501 14.4531 15.6167C14.4531 13.7501 15.9031 12.2334 17.6865 12.2334H21.8698C23.9198 12.2334 25.5698 13.9667 25.5698 16.1167" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 10V30" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9997 36.6663C29.2044 36.6663 36.6663 29.2044 36.6663 19.9997C36.6663 10.7949 29.2044 3.33301 19.9997 3.33301C10.7949 3.33301 3.33301 10.7949 3.33301 19.9997C3.33301 29.2044 10.7949 36.6663 19.9997 36.6663Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    transactionMinus: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2135 32.833C12.5801 31.3663 14.6635 31.483 15.8635 33.083L17.5468 35.333C18.8968 37.1163 21.0801 37.1163 22.4301 35.333L24.1135 33.083C25.3135 31.483 27.3968 31.3663 28.7635 32.833C31.7301 35.9997 34.1468 34.9497 34.1468 30.5163V11.733C34.1468 5.01634 32.5801 3.33301 26.2801 3.33301H13.6801C7.38015 3.33301 5.81348 5.01634 5.81348 11.733V30.4997C5.83014 34.9497 8.26346 35.983 11.2135 32.833Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.417 16.667H24.5837" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    walletCheck: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0003 31.6667C15.0003 32.9167 14.6503 34.1 14.0337 35.1C12.8837 37.0333 10.767 38.3333 8.33366 38.3333C5.90033 38.3333 3.78366 37.0333 2.63366 35.1C2.017 34.1 1.66699 32.9167 1.66699 31.6667C1.66699 27.9833 4.65033 25 8.33366 25C12.017 25 15.0003 27.9833 15.0003 31.6667Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.73633 31.6655L7.38633 33.3155L10.9363 30.0322" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.586 11.7496C29.186 11.683 28.7693 11.6663 28.336 11.6663H11.6693C11.2027 11.6663 10.7527 11.6996 10.3193 11.7663C10.5527 11.2996 10.886 10.8664 11.286 10.4664L16.7027 5.03301C18.986 2.76634 22.686 2.76634 24.9693 5.03301L27.886 7.98294C28.9527 9.03294 29.5193 10.3663 29.586 11.7496Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6663 20.0003V28.3337C36.6663 33.3337 33.333 36.667 28.333 36.667H12.7163C13.233 36.2337 13.683 35.7003 14.033 35.1003C14.6497 34.1003 14.9997 32.917 14.9997 31.667C14.9997 27.9837 12.0163 25.0003 8.33301 25.0003C6.33301 25.0003 4.54967 25.8836 3.33301 27.267V20.0003C3.33301 15.467 6.06634 12.3003 10.3163 11.767C10.7497 11.7003 11.1997 11.667 11.6663 11.667H28.333C28.7663 11.667 29.183 11.6836 29.583 11.7503C33.883 12.2503 36.6663 15.4337 36.6663 20.0003Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6663 20.833H31.6663C29.833 20.833 28.333 22.333 28.333 24.1663C28.333 25.9997 29.833 27.4997 31.6663 27.4997H36.6663" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    clockHome: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6663 19.9997C36.6663 29.1997 29.1997 36.6663 19.9997 36.6663C10.7997 36.6663 3.33301 29.1997 3.33301 19.9997C3.33301 10.7997 10.7997 3.33301 19.9997 3.33301C29.1997 3.33301 36.6663 10.7997 36.6663 19.9997Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.1838 25.2999L21.0171 22.2166C20.1171 21.6833 19.3838 20.3999 19.3838 19.3499V12.5166" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    cardHome: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33301 14.1748H36.6663" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 27.5078H13.3333" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 27.5078H24.1667" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.733 5.8418H29.2497C35.183 5.8418 36.6663 7.30846 36.6663 13.1585V26.8418C36.6663 32.6918 35.183 34.1585 29.2663 34.1585H10.733C4.81634 34.1751 3.33301 32.7085 3.33301 26.8585V13.1585C3.33301 7.30846 4.81634 5.8418 10.733 5.8418Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    strongBox: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9997 36.6663H24.9997C33.333 36.6663 36.6663 33.333 36.6663 24.9997V14.9997C36.6663 6.66634 33.333 3.33301 24.9997 3.33301H14.9997C6.66634 3.33301 3.33301 6.66634 3.33301 14.9997V24.9997C3.33301 33.333 6.66634 36.6663 14.9997 36.6663Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.333 31.6663H26.6663C29.9997 31.6663 31.6663 29.9997 31.6663 26.6663V13.333C31.6663 9.99967 29.9997 8.33301 26.6663 8.33301H13.333C9.99967 8.33301 8.33301 9.99967 8.33301 13.333V26.6663C8.33301 29.9997 9.99967 31.6663 13.333 31.6663Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33301 15.833H12.4663C14.7663 15.833 16.633 17.6997 16.633 19.9997C16.633 22.2997 14.7663 24.1663 12.4663 24.1663H8.33301" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.667 16.6504H26.667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.667 23.333H26.667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20H12.1667" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    edit: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16699 1.6665H7.50033C3.33366 1.6665 1.66699 3.33317 1.66699 7.49984V12.4998C1.66699 16.6665 3.33366 18.3332 7.50033 18.3332H12.5003C16.667 18.3332 18.3337 16.6665 18.3337 12.4998V10.8332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3666 2.51688L6.7999 9.08354C6.5499 9.33354 6.2999 9.82521 6.2499 10.1835L5.89157 12.6919C5.75823 13.6002 6.3999 14.2335 7.30823 14.1085L9.81657 13.7502C10.1666 13.7002 10.6582 13.4502 10.9166 13.2002L17.4832 6.63354C18.6166 5.50021 19.1499 4.18354 17.4832 2.51688C15.8166 0.850211 14.4999 1.38354 13.3666 2.51688Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4248 3.4585C12.9831 5.45016 14.5415 7.0085 16.5415 7.57516" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    delete: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 4.98356C14.725 4.70856 11.9333 4.56689 9.15 4.56689C7.5 4.56689 5.85 4.65023 4.2 4.81689L2.5 4.98356" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.08301 4.1415L7.26634 3.04984C7.39967 2.25817 7.49967 1.6665 8.90801 1.6665H11.0913C12.4997 1.6665 12.608 2.2915 12.733 3.05817L12.9163 4.1415" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7087 7.6167L15.167 16.0084C15.0753 17.3167 15.0003 18.3334 12.6753 18.3334H7.32533C5.00033 18.3334 4.92533 17.3167 4.83366 16.0084L4.29199 7.6167" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6084 13.75H11.3834" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.91699 10.4165H12.0837" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    arrowRight: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 12H20.33" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    arrowDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6004 8.9502L13.1671 15.4702C12.5254 16.2402 11.4754 16.2402 10.8337 15.4702L5.40039 8.9502" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  };

  const { src } = props;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: images[src] || "" }}
      className="svgicon"
    />
  );
}

export default Img;
