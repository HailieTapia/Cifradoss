import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { cifrar, descifrar } from './funciones';
import './estilo.css';

const { Title } = Typography;

const Cesar = () => {
    const [mensaje, setMensaje] = useState('');
    const [llave, setLlave] = useState('');
    const [resultado, setResultado] = useState('');
    const [errorMensaje, setErrorMensaje] = useState('');

    useEffect(() => {
        if (mensaje.trim() === '') {
            setErrorMensaje('Por favor, rellena los campos.');
        } else if (!llave || isNaN(llave) || parseInt(llave) <= 0) {
            setErrorMensaje('Por favor, ingresa un número válido.');
        } else {
            setErrorMensaje('');
        }
    }, [mensaje, llave]);

    const handleCifrar = () => {
        const cifrado = cifrar(mensaje.toUpperCase(), parseInt(llave));
        setResultado(cifrado);
    };
    const handleDescifrar = () => {
        const descifrado = descifrar(mensaje.toUpperCase(), parseInt(llave));
        setResultado(descifrado);
    };

    return (
        <div className="container">
            <div className="container-x">
                <Title level={3} className="cesar-title">Cifrado César</Title>
                <div className="cesar-instructions">
                    <Title level={4}>Instrucciones:</Title>
                    <p><strong>1.</strong> Ingresa un texto que deseas cifrar o descifrar.</p>
                    <p><strong>2.</strong> Introduce una clave numérica, que será el número de desplazamientos de cada letra en el alfabeto.</p>
                    <p><strong>3.</strong> Presiona el botón de 'Cifrar' para codificar el mensaje o 'Descifrar' para recuperar el texto original.</p>
                    <p>Ejemplo: Con una clave de 3, la letra "A" se convierte en "D".</p>
                </div>
            </div>


            <div className="cesar-container">
                <Form layout="vertical">
                    <Form.Item help={mensaje.trim() === '' ? errorMensaje : ''}
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
                    <Form.Item help={!llave || isNaN(llave) || parseInt(llave) <= 0 ? errorMensaje : ''}
                        validateStatus={!llave || isNaN(llave) || parseInt(llave) <= 0 ? 'error' : ''}
                    >
                        <label className="cesar-label">Llave de Cifrado (solo números)</label>
                        <Input
                            className="cesar-input"
                            type="number"
                            value={llave}
                            onChange={(e) => setLlave(e.target.value)}
                            placeholder="Escribe la llave (número)"
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

export default Cesar;
