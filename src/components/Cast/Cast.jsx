import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { requestActors } from 'services/Api';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';

function Cast() {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setIsLoading(true);
        const dataActors = await requestActors(id);
        setActors(dataActors);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchActors();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {actors && <CastList actors={actors} />}
    </>
  );
}

export default Cast;
