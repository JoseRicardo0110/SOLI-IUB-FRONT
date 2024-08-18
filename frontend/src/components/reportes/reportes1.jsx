const handleDownload = async () => {
    const params = {
        report_type: reportType,
        start_date: startDate,
        end_date: endDate,
        area_id: areaId || null,  // Aquí cambiamos el string vacío por null si `areaId` está vacío
    };

    try {
        const response = await axios.post("https://soli-iub-fastapi.onrender.com/report", params, {
            responseType: 'blob',
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'report.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (error) {
        console.error("Error al descargar el reporte:", error);
        alert("Ocurrió un error al descargar el reporte. Revisa la consola para más detalles.");
    }
};
