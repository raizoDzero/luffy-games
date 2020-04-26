import React, { useState } from 'react';

// Other
import { Card, Button, Form, Input } from 'antd';

const Login = Form.create({})(props => {
  const { onLogin, form } = props;
  const { getFieldDecorator } = form;
  const [disable, setDisable] = useState(false);

  // verifica que los campos "require" estén llenados
  const localSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        if (
          (value.usuario === 'howard' || value.usuario === 'botz') &&
          value.pass === 'comic456'
        ) {
          setDisable(false);
          onLogin();
        } else {
          setDisable(true);
        }
      } else {
        console.log('submit bloqueado');
      }
    });
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
  };
  return (
    <div className="login-cont">
      <Card style={{ width: '400px' }}>
        <p>Login</p>
        <br />
        <br />
        <Form onSubmit={localSubmit}>
          <Form.Item {...formItemLayout} label="Correo">
            {getFieldDecorator('usuario', {
              rules: [
                {
                  required: true,
                  message: 'Por favor ingresa un correo',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Contraseña">
            {getFieldDecorator('pass', {
              rules: [
                {
                  required: true,
                  message: 'Por ingresa una contraseña',
                  whitespace: true
                }
              ]
            })(<Input.Password />)}
          </Form.Item>
          <br />
          {disable && <p>Datos de sessión inválidos</p>}
          <br />
          <Button htmlType="submit">Subir</Button>
        </Form>
      </Card>
    </div>
  );
});

export default Login;
