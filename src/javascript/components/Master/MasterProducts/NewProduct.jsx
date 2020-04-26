import React, { useState } from 'react';

// Other
import { Card, Row, Col, Form, Input, Select, InputNumber, Button } from 'antd';

const NewProduct = Form.create({
  onValuesChange(props, values) {
    props.updateForm(values);
  }
})(props => {
  const {
    newP,
    onShowForm,
    form,
    onNewProduct,
    onUpdateAll,
    formMaster
  } = props;
  const { getFieldDecorator } = form;
  const [disable, setDisable] = useState(false);

  console.log('formMaster: ', formMaster);

  // verifica que los campos "require" estén llenados
  const localSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, value) => {
      console.log('form: ', value);
      if (!err) {
        setDisable(true);
        // fecth req
        onNewProduct().then(data => {
          console.log('onNewProduct from component ', data);
          // clean form, close form, stop disabling, update table
          props.updateForm('clear');
          setDisable(false);
          onUpdateAll();
          onShowForm();
        });
      } else {
        console.log('submit bloqueado');
      }
    });
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
  };
  const formItemLayoutLong = {
    labelCol: { span: 12 },
    wrapperCol: { span: 11 }
  };
  const onCloseForm = () => {
    props.updateForm('clear');
    onShowForm();
  };
  if (newP) {
    return (
      <div className="new-prod">
        <Card style={{ width: '90%' }} title="Producto nuevo">
          {/* ----------------------------form------------------------- */}
          <Form onSubmit={localSubmit}>
            <Row>
              <Col xl={12}>
                <Form.Item {...formItemLayout} label="marca">
                  {getFieldDecorator('marca', {
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un nombre del producto',
                        whitespace: true
                      }
                    ],
                    initialValue: formMaster.marca || ''
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item {...formItemLayout} label="modelo">
                  {getFieldDecorator('modelo', {
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un nombre del producto',
                        whitespace: true
                      }
                    ],
                    initialValue: formMaster.modelo || ''
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={8}>
                <Form.Item {...formItemLayout} label="costo">
                  {getFieldDecorator('costo', {
                    initialValue: formMaster.costo || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un precio'
                      }
                    ]
                  })(<InputNumber size="large" />)}
                </Form.Item>
              </Col>
              <Col xl={8}>
                <Form.Item {...formItemLayout} label="precio">
                  {getFieldDecorator('precio', {
                    initialValue: formMaster.precio || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un precio'
                      }
                    ]
                  })(<InputNumber size="large" />)}
                </Form.Item>
              </Col>
              <Col xl={8}>
                <Form.Item {...formItemLayoutLong} label="disponibles">
                  {getFieldDecorator('disponibles', {
                    initialValue: formMaster.disponibles || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un precio'
                      }
                    ]
                  })(<InputNumber size="large" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={24}>
                <Form.Item
                  {...formItemLayout}
                  label="Procesador (nombre corto)"
                >
                  {getFieldDecorator('shortMicro', {
                    initialValue: formMaster.shortMicro || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un nombre del producto',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item {...formItemLayout} label="garantia">
                  {getFieldDecorator('garantia', {
                    initialValue: formMaster.garantia || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un nombre del producto',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item {...formItemLayout} label="os">
                  {getFieldDecorator('os', {
                    initialValue: formMaster.os || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un nombre del producto',
                        whitespace: true
                      }
                    ]
                  })(
                    <Select>
                      <Select.Option value="Windows 10 PRO">
                        Windows 10 PRO
                      </Select.Option>
                      <Select.Option value="Windows 10 Home">
                        Windows 10 Home
                      </Select.Option>
                      <Select.Option value="Windows 7 Ultimate">
                        Windows 7 Ultimate
                      </Select.Option>
                      <Select.Option value="Mac OS 10.14">
                        Mac OS 10.14
                      </Select.Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <Form.Item {...formItemLayout} label="Tipo de Lap">
                  {getFieldDecorator('type', {
                    initialValue: formMaster.type || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa una categoría'
                      }
                    ]
                  })(
                    <Select>
                      <Select.Option value="normal">normal</Select.Option>
                      <Select.Option value="Touch">Touch</Select.Option>
                      <Select.Option value="Ultra Small">
                        Ultra Small
                      </Select.Option>
                      <Select.Option value="Gaming">Gaming</Select.Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item {...formItemLayout} label="estetica">
                  {getFieldDecorator('estetica', {
                    initialValue: formMaster.estetica || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un nombre del producto',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={24}>
                <Form.Item {...formItemLayout} label="recomendacion">
                  {getFieldDecorator('recomendacion', {
                    initialValue: formMaster.recomendacion || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa una categoría'
                      }
                    ]
                  })(
                    <Select>
                      <Select.Option value="Uso básico (office, pdf y navegación sin problema)">
                        Uso básico (office, pdf y navegación sin problema)
                      </Select.Option>
                      <Select.Option value="Uso moderado (2 o 3 programas simultaneos con buen rendimiento)">
                        Uso moderado (2 o 3 programas simultaneos con buen
                        rendimiento)
                      </Select.Option>
                      <Select.Option value="Uso avanzado (rendimiento excelente en casi cualquier programa)">
                        Uso avanzado (rendimiento excelente en casi cualquier
                        programa)
                      </Select.Option>
                      <Select.Option value="Uso rudo (excelente incluso en software pesado)">
                        Uso rudo (excelente incluso en software pesado)
                      </Select.Option>
                      <Select.Option value="Uso extremo (Rendimiento insuperable, te costará trabajo que se trabe)">
                        Uso extremo (Rendimiento insuperable, te costará trabajo
                        que se trabe)
                      </Select.Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={24}>
                <Form.Item label="Detalle o defecto">
                  {getFieldDecorator('detalles', {
                    initialValue:
                      formMaster.detalles ||
                      'Ninguno, se encuentra en perfecto estado',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa una descripción',
                        whitespace: true
                      }
                    ]
                  })(<Input.TextArea />)}
                </Form.Item>
              </Col>
              <Col xl={24}>
                <Form.Item label="Especificaciones de rendimiento">
                  {getFieldDecorator('rendimiento', {
                    initialValue: formMaster.rendimiento || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa una descripción',
                        whitespace: true
                      }
                    ]
                  })(<Input.TextArea />)}
                </Form.Item>
              </Col>
              <Col xl={24}>
                <Form.Item label="Especificaciones generales">
                  {getFieldDecorator('specs', {
                    initialValue: formMaster.specs || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa una descripción',
                        whitespace: true
                      }
                    ]
                  })(<Input.TextArea />)}
                </Form.Item>
              </Col>
              <Col xl={24}>
                <Form.Item label="Puertos">
                  {getFieldDecorator('ports', {
                    initialValue: formMaster.ports || '',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa una descripción',
                        whitespace: true
                      }
                    ]
                  })(<Input.TextArea />)}
                </Form.Item>
              </Col>
              <Col xl={24}>
                <Form.Item label="Especificaciones especiales">
                  {getFieldDecorator('special', {
                    initialValue: formMaster.special || ''
                  })(<Input.TextArea />)}
                </Form.Item>
              </Col>
            </Row>
            <Form.Item {...formItemLayout} label="url imagen extra 1">
              {getFieldDecorator('url2', {
                initialValue: formMaster.images
                  ? formMaster.images.extra[0] || ''
                  : '',
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa una url',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="url imagen extra 2">
              {getFieldDecorator('url3', {
                initialValue: formMaster.images
                  ? formMaster.images.extra[1] || ''
                  : '',
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa una url',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="url imagen extra 3">
              {getFieldDecorator('url4', {
                initialValue: formMaster.images
                  ? formMaster.images.extra[2] || ''
                  : '',
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa una url',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="url imagen portada">
              {getFieldDecorator('url1', {
                initialValue: formMaster.images
                  ? formMaster.images.extra[0] || ''
                  : '',
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa una url',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Row>
              <Col sm={10}>
                <Button disabled={disable} type="danger" onClick={onCloseForm}>
                  Cerrar
                </Button>
              </Col>
              <Col offset={4} sm={10}>
                <Button disabled={disable} htmlType="submit">
                  Subir
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
  return null;
});

export default NewProduct;
