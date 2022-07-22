import M from 'materialize-css';

const Alert = (name) => {

    M.toast({html: `${name} был добавлен в корзину`, classes: 'deep-purple accent-1'});
}

export default Alert