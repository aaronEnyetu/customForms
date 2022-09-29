import {
  InputControl,
  TextAreaControl,
  SelectControl,
  CheckboxControl,
} from '../Forms/FormControls.jsx';
import styles from './Dashboard.css';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <form>
        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
        />

        <InputControl
          label="Date"
          required
          type="date"
          name="date"
          placeholder="pick a date"
        />

        <TextAreaControl
          label="Bio"
          name="bio"
          placeholder="tell us about yourself"
        />
        <SelectControl
          label="Plant"
          required
          name="plant"
          placeholder="select a plant"
        >
          <option value="1">Bamboo</option>
          <option value="2">Cactus</option>
          <option value="3">Orchid</option>
        </SelectControl>

        <CheckboxControl legend="Do you agree?" label="Yes" />
      </form>
    </div>
  );
}
