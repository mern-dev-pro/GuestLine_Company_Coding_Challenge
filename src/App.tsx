import React, { useState } from 'react';

import Text from 'components/Text';
import Container from 'layout/Container';
import Rating from 'components/Rating';

function App() {
  const [stars, setStars] = useState(4);
  return (
    <div>
      <header>
        <Container>
          <Text size="title" content="This is just testing for text component" />
          <Text size="heading" content="This is just testing for text component" />
          <Text size="pharagraph" content="This is just testing for text component" />
          <Rating rating={stars} changeRating={setStars} />
        </Container>
      </header>
    </div>
  );
}

export default App;
