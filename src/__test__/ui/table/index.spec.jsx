import { render } from '@testing-library/react';
import Table from '@/components/ui/table';

describe('Table Component', () => {
  it('should render table with no data', () => {
    const { container } = render(<Table />);
    expect(container).toMatchSnapshot();
  });

  it('should render table with data', () => {
    const TABLE_HEAD = ['Name', 'Email'];
    const TABLE_DATA = [
      {
        name: 'John',
        email: '7XQp0@example.com',
      },
      {
        name: 'Christ',
        email: 'abcd@example.com',
      },
    ];
    const { container } = render(<Table head={TABLE_HEAD} data={TABLE_DATA} />);
    expect(container).toMatchSnapshot();
  });

  it('should render table with data validate row count', () => {
    const TABLE_HEAD = ['Name', 'Email'];
    const TABLE_DATA = [
      {
        name: 'John',
        email: '7XQp0@example.com',
      },
      {
        name: 'Christ',
        email: 'abcd@example.com',
      },
    ];
    const { getAllByRole } = render(
      <Table head={TABLE_HEAD} data={TABLE_DATA} />
    );
    const tableRows = getAllByRole('row');
    expect(tableRows).toHaveLength(3);
  });

  it('should render table with data validate cell count', () => {
    const TABLE_HEAD = ['Name', 'Email'];
    const TABLE_DATA = [
      {
        name: 'John',
        email: '7XQp0@example.com',
      },
      {
        name: 'Christ',
        email: 'abcd@example.com',
      },
    ];
    const { getAllByRole } = render(
      <Table head={TABLE_HEAD} data={TABLE_DATA} />
    );
    const tableRows = getAllByRole('cell');
    expect(tableRows).toHaveLength(4);
  });
});
