import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

const lorem =
  'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Le ';

storiesOf('atoms/Paragraphs', module)
  .add('center', () => <Paragraph center>{lorem}</Paragraph>)
  .add('Blue-motive', () => <Paragraph blue>{lorem}</Paragraph>)
  .add('Black-motive', () => <Paragraph black>{lorem}</Paragraph>)
  .add('Done', () => <Paragraph done>Napisana stronka</Paragraph>)
  .add('light', () => <Paragraph light>Napisana stronka</Paragraph>)
  .add('blackFont', () => <Paragraph blackFont>Napisana stronka</Paragraph>)
  .add('blockquote', () => (
    <Paragraph black blockquote>
      Napisana stronka Napisana stronka Napisana stronka
    </Paragraph>
  ))
  .add('Link', () => (
    <Paragraph blackFont link>
      Napisana stronka
    </Paragraph>
  ));
