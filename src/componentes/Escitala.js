import React, { useState,useEffect } from 'react';
import { Input, Button, Form, Row, Col, Typography } from 'antd';
import { cifrarEscitala, descifrarEscitala } from './funciones';
import './estilo.css';

const { Title } = Typography;

const Escitala = () => {
    const [mensaje, setMensaje] = useState('');
    const [columnas, setColumnas] = useState('');
    const [resultado, setResultado] = useState('');
    const [errorMensaje, setErrorMensaje] = useState('');

    useEffect(() => {
        if (mensaje.trim() === '') {
            setErrorMensaje('Por favor, rellena los campos.');
        } else if (!columnas || isNaN(columnas) || parseInt(columnas) <= 0) {
            setErrorMensaje('Por favor, ingresa un número válido para las columnas.');
        } else {
            setErrorMensaje('');
        }
    }, [mensaje, columnas]);

    const handleCifrar = () => {
        const cifrado = cifrarEscitala(mensaje.toUpperCase(), parseInt(columnas));
        setResultado(cifrado);
    };
    const handleDescifrar = () => {
        const descifrado = descifrarEscitala(mensaje.toUpperCase(), parseInt(columnas));
        setResultado(descifrado);
    };

    return (
        <div className="container">
            <div className="container-x">
                <Title level={3} className="cesar-title">Cifrado Escitala</Title>
                <div className="cesar-instructions">
                    <Title level={4}>Instrucciones:</Title>
                    <p><strong>1.</strong> Ingresa el mensaje que deseas cifrar o descifrar.</p>
                    <p><strong>2.</strong> Introduce un número que representará la cantidad de columnas que deseas utilizar para el cifrado. Este número determina cómo se organiza el texto en la matriz.</p>
                    <p><strong>3.</strong> Presiona el botón de 'Cifrar' para codificar el mensaje o 'Descifrar' para recuperar el texto original.</p>
                    <p>Ejemplo: Si ingresas el mensaje "HOLA MUNDO" y utilizas 3 columnas, la organización en la matriz será:</p>
                    <pre>
                        H O L     <br />
                        A   M     <br />
                        U N D     <br />
                        O         <br />
                    </pre>
                    <p>Al leer la matriz en vertical, el mensaje cifrado resultante será "HAUOO N LMD ".</p>
                </div>
            </div>

            <div className="cesar-container">
                <Form layout="vertical">
                    <Form.Item    help={mensaje.trim() === '' ? errorMensaje : ''}
                        validateStatus={mensaje.trim() === '' ? 'error' : ''}
                    >
                        <label className="cesar-label">Mensaje a cifrar/descifrar</label>
                        <Input
                            className="cesar-input"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            placeholder="Escribe el mensaje"
                        />
                    </Form.Item>
                    <Form.Item  help={!columnas || isNaN(columnas) || parseInt(columnas) <= 0 ? errorMensaje : ''}
                        validateStatus={!columnas || isNaN(columnas) || parseInt(columnas) <= 0 ? 'error' : ''}
                    >
                        <label className="cesar-label">Número de Columnas (Grosor de Vara)</label>
                        <Input
                            className="cesar-input"
                            type="number"
                            value={columnas}
                            onChange={(e) => setColumnas(e.target.value)}
                            placeholder="Escribe el número de columnas"
                        />
                    </Form.Item>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Button
                                type="primary"
                                style={{ background: '#123a63' }}
                                block
                                onClick={handleCifrar}
                                disabled={!!errorMensaje}
                            >
                                Cifrar
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                type="primary"
                                style={{ background: '#123a63' }}
                                block
                                onClick={handleDescifrar}
                                disabled={!!errorMensaje}
                            >
                                Descifrar
                            </Button>
                        </Col>
                    </Row>
                    <Form.Item>
                        <label className="cesar-label">Resultado</label>
                        <Input.TextArea
                            className="cesar-textarea"
                            value={resultado}
                            readOnly
                            rows={4}
                            placeholder="El resultado aparecerá aquí"
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Escitala;
