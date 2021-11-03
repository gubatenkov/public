import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  FormGroup,
  Button,
  //   Alert,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import { Mail, Lock } from 'react-feather';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginUser } from 'features/userSlice';
import { Logo } from 'components';

const Login = () => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('user');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleValidSubmit = () => {
    setIsLoading(true);
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className='account-pages my-5'>
      <Container>
        <Row className='justify-content-center'>
          {/* <Col xl={10}> */}
          <Card
            className='card'
            style={{ maxWidth: '500px', padding: '50px 50px 30px' }}
          >
            <CardBody className='p-0'>
              {/* preloader */}
              {/* {loading && <Loader />} */}

              <div className='mx-auto mb-3 d-flex justify-content-center'>
                <Logo />
              </div>

              <h6 className='h5 mb-0 mt-4 text-center mx-auto'>
                C возвращением!
              </h6>
              <p className='text-muted mt-1 mb-4'>
                Введите регистрационные данные для доступа к контрольной панели
              </p>
              {/* 
                      {this.props.error && (
                        <Alert
                          color='danger'
                          isOpen={this.props.error ? true : false}
                        >
                          <div>{this.props.error}</div>
                        </Alert>
                      )} */}

              <AvForm
                onValidSubmit={handleValidSubmit}
                className='authentication-form mx-auto'
                style={{ maxWidth: '400px' }}
              >
                <AvGroup className='mb-4'>
                  <Label for='username'>Логин</Label>
                  <InputGroup>
                    <InputGroupText>
                      <Mail className='icon-dual me-0' />
                    </InputGroupText>

                    <AvInput
                      type='text'
                      name='username'
                      id='username'
                      placeholder='username@gmail.com'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <AvFeedback>Проверьте это поле</AvFeedback>
                </AvGroup>

                <AvGroup className='mb-4'>
                  <Label for='password'>Пароль</Label>
                  <Link
                    to='/login'
                    className='float-right text-muted text-unline-dashed ml-1'
                  >
                    Забыли пароль?
                  </Link>
                  <InputGroup>
                    <InputGroupText>
                      <Lock className='icon-dual me-0' />
                    </InputGroupText>

                    <AvInput
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Пароль'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <AvFeedback>Проверьте это поле</AvFeedback>
                </AvGroup>

                <FormGroup className='form-group mb-0 text-center'>
                  <Button
                    className='btn-block login-btn w-25'
                    style={{
                      background: '#5369f8',
                      border: 'none',
                      boxShadow: 'none',
                    }}
                    disabled={isLoading}
                  >
                    Войти
                  </Button>
                </FormGroup>

                <p className='mt-3 text-center'>
                  <strong>Логин:</strong> user &nbsp;&nbsp;{' '}
                  <strong>Пароль:</strong> user
                </p>
              </AvForm>
            </CardBody>
          </Card>
          {/* </Col> */}
        </Row>

        <Row className='mt-3'>
          <Col className='col-12 text-center'>
            <p className='text-muted'>
              Еще нет аккаунта?
              <br />
              <Link to='/login' className='text-primary font-weight-bold ml-1'>
                Создать
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
