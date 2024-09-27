import React from 'react';
import { Card, Row, Col, Collapse, Menu } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

const { Panel } = Collapse;

function Principal() {

    return (
        <div className="App">
            <div className="App-body">
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <Card title="Cifrado César" bordered={false}>
                            <p>
                                El Cifrado César es un cifrado por sustitución donde cada letra es reemplazada por otra un número fijo de posiciones más adelante en el alfabeto.
                            </p>
                            <Collapse accordion>
                                <Panel className="ant-card-body-panel" header="Ventajas" key="1">
                                    <p>
                                        <strong> Simplicidad:</strong> Fácil de implementar y entender.<br />
                                        <strong>Velocidad:</strong> Rápido en términos de procesamiento, ya que solo requiere un desplazamiento constante.<br />
                                    </p>
                                </Panel>
                                <Panel className="ant-card-body-panel" header="Desventajas" key="2">
                                    <p>
                                        <strong> Fácil de romper:</strong> puede usar ataques de fuerza bruta o análisis de frecuencia para descifrar el mensaje.<br />
                                        <strong>Vulnerabilidad al análisis de frecuencia:</strong> Si el texto cifrado es suficientemente largo, las letras más frecuentes del idioma pueden ser identificadas y sustituidas, permitiendo descifrar el mensaje más fácilmente.<br />
                                    </p>
                                </Panel>
                                <Panel  className="ant-card-body-panel" header="Mitigaciones" key="3">
                                    <p>
                                        <strong> Uso de desplazamientos variables:</strong> Introducir cambios en el desplazamiento a lo largo del mensaje puede mejorar la seguridad, aunque sigue siendo vulnerable.<br />
                                        <strong>Uso de métodos de cifrado más complejos:</strong> Se recomienda usar algoritmos de cifrado modernos y seguros, como AES.<br />
                                    </p>
                                </Panel>
                                <Panel  className="ant-card-body-panel" header="¿Cómo funciona?" key="4">
                                    <p>Se elige un desplazamiento y se sustituyen las letras.</p>
                                </Panel>
                                <Panel className="ant-card-body-panel" header="Ejemplo" key="5">
                                    <p>Texto original: <strong>HELLO</strong>, Cifrado: <strong>KHOOR</strong>.</p>
                                </Panel>
                                <Panel  className="ant-card-body-panel" header="Usos" key="6">
                                    <p>Utilizado por Julio César, es simple y vulnerable a ataques de fuerza bruta.</p>
                                </Panel>
                            </Collapse>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12}>
                        <Card title="Cifrado Escítala" bordered={false}>
                            <p>
                                El Cifrado Escítala es un método de la antigua Grecia que utiliza un cilindro y una tira de cuero enrollada. El mensaje se puede leer solo si se usa un cilindro del mismo grosor.
                            </p>
                            <Collapse accordion>
                                <Panel className="ant-card-body-panel"  header="Ventajas" key="1">
                                    <p>
                                        <strong> Mayor complejidad:</strong> Al cambiar la disposición de las letras, el cifrado Escítala es más difícil de descifrar que el César, especialmente con longitudes de mensaje y columnas variables.<br />
                                        <strong>Dificultad de ataque:</strong>Requiere conocer tanto el número de columnas como el mensaje original para descifrarlo correctamente.<br />
                                    </p>
                                </Panel>
                                <Panel  className="ant-card-body-panel" header="Desventajas" key="2">
                                    <p>
                                        <strong> Requiere una clave adicional:</strong> La seguridad depende del secreto de la longitud de la vara o el número de columnas.<br />
                                        <strong>Dificultad en la implementación:</strong> Puede ser más complicado de implementar correctamente en comparación con el cifrado César.<br />
                                    </p>
                                </Panel>
                                <Panel className="ant-card-body-panel" header="Mitigaciones" key="3">
                                    <p>
                                        <strong>Uso de claves más largas y variables:</strong>Incorporar claves que cambien con el tiempo o con cada mensaje puede mejorar la seguridad.<br />
                                        <strong>Combinación con otros métodos de cifrado:</strong> Para mayor seguridad, se puede combinar con un cifrado simétrico para proteger el texto final.<br />
                                    </p>
                                </Panel>
                                <Panel className="ant-card-body-panel" header="¿Cómo funciona?" key="4">
                                    <p><strong>Selecciona el Número de Columnas:</strong>Decide cuántas columnas (o "grosor de vara") usarás para la matriz. Este número debe ser un entero positivo.<br />
                                    <strong>Escribe el Mensaje:</strong>Introduce el mensaje en la matriz fila por fila, de izquierda a derecha.<br />
                                    <strong>Cifrado:</strong>lee el mensaje en orden vertical, columna por columna. Esto te dará el texto cifrado.<br />
                                    <strong>Descifrado:</strong>reorganiza los caracteres en la matriz y léelos horizontalmente. Esto te permitirá recuperar el texto original.</p>
                                </Panel>
                                <Panel className="ant-card-body-panel" header="Ejemplo" key="5">
                                <p>Texto original: <strong>MENSAJE SECRETO</strong>, Columnas: <strong>4</strong>, Cifrado: <strong>MASEEJETNECOS R </strong>.</p>
                                <p>MENS<br />AJE <br />SECR<br />ETO</p>
                                </Panel>
                                <Panel className="ant-card-body-panel" header="Usos" key="6">
                                    <p>Usado por los espartanos en las guerras, ofrece más seguridad que el Cifrado César.</p>
                                </Panel>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Principal;
