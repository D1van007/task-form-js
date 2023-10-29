import "./styles/style.scss";
import { addMaskTelInput } from "./utils/mask-phone";
import { validationForm } from "./utils/validation-form";
import { callModal } from './components/modal';
addMaskTelInput();
validationForm();
callModal();