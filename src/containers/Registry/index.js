import universal from 'react-universal-component';
import Loading from 'components/Loading/Loading';

export default universal(() => import('./Registry'), { loading: Loading });
