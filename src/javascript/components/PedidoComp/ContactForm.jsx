import React, { useState } from 'react';

// Other
import { Card, Row, Col, Form, Input } from 'antd';

const ContactForm = Form.create({
  onValuesChange(props, values) {
    props.handleContactForm(values);
  }
})(props => {
  const { onShowForm, form, onNewProduct, onUpdateAll } = props;
  const { getFieldDecorator } = form;
  const [disable, setDisable] = useState(false);

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
  return (
    <Card
      className="pedido-form"
      title="Datos para notificarte de tu compra (no SPAM)"
    >
      {/* ----------------------------form------------------------- */}
      <Form onSubmit={localSubmit}>
        <Row>
          <Col xl={12}>
            <Form.Item {...formItemLayout} label="Nombre">
              {getFieldDecorator('nombre', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa tu nombre',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item {...formItemLayout} label="Apellido">
              {getFieldDecorator('apellido', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa tu apellido',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <Form.Item {...formItemLayout} label="Correo">
              {getFieldDecorator('correo', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa un correo electrónico'
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item {...formItemLayout} label="Teléfono (opcional)">
              {getFieldDecorator('telefono')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
});

export default ContactForm;
