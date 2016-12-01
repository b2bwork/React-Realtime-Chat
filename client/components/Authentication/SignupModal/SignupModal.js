import React, { PropTypes } from 'react';
import { Modal } from 'semantic-ui-react';

import { SignupForm } from '../../../containers';
import styles from './SignupModal.css';

const SignupModal = ({ open, onClose, onShowLoginModal }) => (
  <Modal closeIcon dimmer open={open} size='small' onClose={onClose}>
    <Modal.Header>Signup</Modal.Header>
    <Modal.Content>
      <SignupForm />
    </Modal.Content>
    <a className={styles.loginLink} onClick={onShowLoginModal} >
      Need an account?&nbsp; Sign up, it's free!
    </a>
  </Modal>
);

SignupModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onShowLoginModal: PropTypes.func.isRequired,
};

export default SignupModal;
