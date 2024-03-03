export const downloadFile = ( data: string, filename: string ) => {
    const link = document.createElement( 'a' )

    link.download = filename
    link.href = data

    link.click()
}
