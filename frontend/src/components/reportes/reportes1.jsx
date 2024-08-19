import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const Reportes1 = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reportType, setReportType] = useState("");
    const [areaId, setAreaId] = useState("");

    const areas = [
        { id: 1, nombre: 'Ingeniería - Telemática' },
        { id: 2, nombre: 'Ingeniería - Técnico Electromecánico' },
        { id: 3, nombre: 'Ciencias Económicas y Administrativas - Administración de Empresas' },
        { id: 4, nombre: 'Ciencias Económicas y Administrativas - Administración de Negocios Internacionales' },
    ];

    const handleDownload = async () => {
        const params = {
            report_type: reportType,
            start_date: startDate,
            end_date: endDate,
            area_id: areaId ? parseInt(areaId) : null,  // Convertimos `areaId` a null si está vacío
        };
    
        console.log("Request Parameters:", params);  // Debug print
    
        try {
            const response = await axios.post("https://soli-iub-fastapi.onrender.com/report", params, {
                responseType: 'blob', // importante para que maneje la respuesta como archivo
            });
    
            console.log("Response Data:", response.data);  // Debug print
    
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'report.xlsx'); // nombre del archivo
            document.body.appendChild(link);
            link.click();
            link.remove(); // Remover el link del DOM
    
        } catch (error) {
            console.error("Error al descargar el reporte:", error);  // Debug print
            alert("Ocurrió un error al descargar el reporte. Revisa la consola para más detalles.");
        }
    };
    
    return (
        <Container className="mt-5 p-4 border rounded bg-white shadow">
            <h2 className="text-center text-primary mb-4">Generar Reportes</h2>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="startDate">
                            <Form.Label className="text-primary">Fecha de Inicio</Form.Label>
                            <Form.Control
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="endDate">
                            <Form.Label className="text-primary">Fecha de Fin</Form.Label>
                            <Form.Control
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="reportType" className="mb-3">
                    <Form.Label className="text-primary">Tipo de Reporte</Form.Label>
                    <Form.Control
                        as="select"
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                    >
                        <option value="">Selecciona un tipo de reporte</option>
                        <option value="sin_asignar">Solicitudes sin asignar</option>
                        <option value="pendientes">Solicitudes pendientes</option>
                        <option value="finalizadas">Solicitudes finalizadas</option>
                        <option value="pendientes_area">Solicitudes pendientes por área</option>
                        <option value="finalizadas_area">Solicitudes finalizadas por área</option>
                        <option value="todas">Todas las solicitudes</option>
                    </Form.Control>
                </Form.Group>

                {["pendientes_area", "finalizadas_area"].includes(reportType) && (
                    <Form.Group controlId="areaId" className="mb-3">
                        <Form.Label className="text-primary">Área</Form.Label>
                        <Form.Control
                            as="select"
                            value={areaId}
                            onChange={(e) => setAreaId(e.target.value)}
                        >
                            <option value="">Selecciona un área</option>
                            {areas.map(area => (
                                <option key={area.id} value={area.id}>{area.nombre}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}

                <Button variant="primary" className="w-100" onClick={handleDownload}>
                    Descargar Reporte
                </Button>
            </Form>
        </Container>
    );
};

export default Reportes1;
