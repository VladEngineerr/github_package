import Input from './Input';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Input', () => {
  describe('snapshots', () => {
    test('render with defaults', () => {
      const { baseElement } = render(
        <Input label="Test" name="test" onInput={vi.fn} />
      );

      expect(baseElement).toMatchSnapshot();
    });

    test('render with defaultValue', () => {
      const { baseElement } = render(
        <Input
          label="Test"
          name="test"
          defaultValue="foo"
          onInput={vi.fn}
        />
      );

      expect(baseElement).toMatchSnapshot();
    });

    test('render with props', () => {
      const { baseElement } = render(
        <Input
          className="test class"
          label="Test"
          name="test"
          type="number"
          onInput={vi.fn}
          onFunc={vi.fn}
          onBlur={vi.fn}
          placeholder="this is a placeholder"
        />
      );

      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('integration', () => {
    let user;

    beforeEach(() => {
      user = userEvent.setup();
    });

    afterEach(() => {
      user = null;
    });

    test('event handling', async () => {
      const onBlur = vi.fn();
      const onChange = vi.fn();
      const onFocus = vi.fn();
      const onInput = vi.fn();

      render(
        <Input
          label="Test"
          name="test"
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onInput={onInput}
        />
      );

      const input = screen.getByTestId('xInput-input');

      await user.type(input, 'foobar'); // enter into the input and type

      expect(input).toHaveValue('foobar'); // updated while typing
      expect(onFocus).toHaveBeenCalled(); // fires when entering
      expect(onInput).toHaveBeenCalled(); // fires while typing

      await user.tab(input); // leave the input

      expect(onBlur).toHaveBeenCalled(); // fires when exiting
      expect(onChange).toHaveBeenCalled(); // fires when exiting and value is changed
    });
  });
});
