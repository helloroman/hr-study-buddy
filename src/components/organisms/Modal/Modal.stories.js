import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails
      student={{
        id: '1',
        name: 'Adam Romański',
        attendance: '39%',
        average: '2.3',
        group: 'A',
        course: 'Business Philosophy',
        grades: [
          {
            subject: 'Business Philosophy',
            average: '3.3',
          },
          {
            subject: 'Marketing',
            average: '4.7',
          },
          {
            subject: 'Modern Economy',
            average: '2.5',
          },
        ],
      }}
    />
  </Modal>
);

export const Student = Template.bind({});
