import { useState } from 'react';

function useForm() {
  const [form, setForm] = useState({

	});

	return { form, setForm };
}

export default useForm;