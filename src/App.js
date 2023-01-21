import Router from './route/Router'
import { ToastContainer  } from 'react-toastify';
import { useLoading } from './context/loadingContext';
import Spinner from './component/Ui/Spinner';


function App() {

  const { loading } = useLoading();


  return (
    <>
      {loading && <Spinner/>}
      <Router />
      <ToastContainer autoClose={2500} theme="colored" position="bottom-right" />
    </>
  );
}

export default App;
