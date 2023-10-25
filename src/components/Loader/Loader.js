import { RotatingTriangles } from 'react-loader-spinner';

export function Loader() {
  return (
    <RotatingTriangles
      height="180"
      width="180"
      colors={['#3f47cc', ' #566573', '#212121']}
      ariaLabel="rotating-triangels-loading"
      radius="12.5"
      wrapperStyle={{
        position: 'fixed',
        top: '51%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
