import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      console.log(groups);
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
