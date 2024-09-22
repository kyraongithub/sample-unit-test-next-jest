import Table from '@/components/ui/table';
import { TABLE_DATA, TABLE_HEAD } from './constant';
import UserForm from '@/components/container/UserForm';

const FormView = () => {
  return (
    <div>
      <UserForm />
      <hr />
      <Table head={TABLE_HEAD} data={TABLE_DATA} />
    </div>
  );
};

export default FormView;
