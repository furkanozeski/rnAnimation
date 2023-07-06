import React, { useCallback, useState } from 'react';
import SwipeableViewProps from '@src/types/SwipeableViewPropType';
import { ListRenderItemInfo } from 'react-native/Libraries/Lists/VirtualizedList';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import TrashBinIcon from 'react-native-vector-icons/Feather';
import CheckMarkCircle from 'react-native-vector-icons/Ionicons';
import { NativeTouchEvent, TouchableOpacity } from 'react-native';
import SwipeableView from '../SwipeableView/SwipeableView';

const mockData: Array<SwipeableViewProps> = [
  {
    text: 'Mock 1',
    date: new Date('23.07.2023'),
  },
  {
    text: 'Mock 2',
    date: new Date('05.07.2023'),
  },
  {
    text: 'Mock 3',
    date: new Date('06/07/2023'),
  },
  {
    text: 'Mock 4',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 5',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 6',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 7',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 8',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 9',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 10',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 11',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 12',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 13',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 14',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 15',
    date: new Date('06.07.2023'),
  },
];

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const PLACEHOLDER_KEY: string = '';

export default function AnimatedList() {
  const [isSelected, setIsSelected] = useState({ [PLACEHOLDER_KEY]: { selected: false, name: '' } });


  const handleTouchEvent = (text: string) => {

    if (!isSelected?.[text]?.selected) {
      setIsSelected((prevState) => ({
        ...prevState,
        [text]: {
          selected: true,
          name: text
        }
      }));
    } else {
      setIsSelected((prevState) => ({
        ...prevState,
        [text]: {
          selected: false,
          name: prevState?.[text]?.name
        }
      }));
    }
  };

  const renderLeadingIcon = useCallback((contentId: string) => (
    <TouchableOpacity
      onPress={(event) => {
        handleTouchEvent(contentId);
      }}
    >
      {
        isSelected?.[contentId]?.selected
          && isSelected?.[contentId]?.name === contentId
          ? (
            <CheckMarkCircle
              color="green"
              name="checkmark-done-circle"
              size={23}
            />
          ) : (
            <CheckMarkCircle
              color="black"
              name="checkmark-circle-outline"
              size={23}
            />
          )
      }
    </TouchableOpacity>
  ), [isSelected]);

  const renderTrailingIcon = useCallback(() => (
    <TrashBinIcon
      color="black"
      name="trash-2"
      size={23}
    />
  ), []);

  const SwipeableViewCallback = useCallback(
    ({ item }: ListRenderItemInfo<SwipeableViewProps>) => (
      <SwipeableView
        text={item.text}
        leadingIcon={renderLeadingIcon}
        trailingIcon={renderTrailingIcon}
      />
    ),
    [renderLeadingIcon, renderTrailingIcon]
  );

  return (
    <Animated.FlatList
      data={mockData}
      renderItem={SwipeableViewCallback}
      style={{ flex: 1 }}
      contentContainerStyle={{
        justifyContent: 'center',
      }}
      entering={FadeInLeft}
      exiting={FadeInRight}
      alwaysBounceVertical
    />
  );
}
