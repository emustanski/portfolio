import { ChangeEvent, FormEvent, memo, useState } from "react";
import { useMediaQuery } from 'usehooks-ts';
import { breakpoints } from '@styles';
import Title from '@components/Title';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import Label from '@components/Label';
import SocialLinks from '@components/SocialLinks';
import {
  StyledContainer,
  StyledForm,
  StyledFields,
  StyledField,
  StyledButton,
} from './Contact.styled';

const formName = "contact";

type Props = {
  isActive: boolean;
};
const ContactSection = ({ isActive }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': formName,
        ...formState,
      }),
    })
      .then(() => {
        form.reset();
        alert("Thank you! I will get back to you as soon as possible!")
      })
      .catch(error => alert(error));
  };

  return (
    <StyledContainer $isActive={isActive}>
      <Title level="2" underlined>
        Contact
      </Title>
      <StyledForm
        name={formName}
        method="post"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <StyledFields>
          <input type="hidden" name="contact-form" value={formName} />
          <StyledField $half={!isMobile}>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" required={true} onChange={handleChange} />
          </StyledField>
          <StyledField $half={!isMobile}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required={true} onChange={handleChange}  />
          </StyledField>
          <StyledField>
            <Label htmlFor="message">Message</Label>
            <Textarea name="message" id="message" rows={4} required={true} onChange={handleChange}  />
          </StyledField>
        </StyledFields>
        <StyledButton type="submit" inverted>
          Send Message
        </StyledButton>
      </StyledForm>
      <SocialLinks />
    </StyledContainer>
  );
};

export default memo(ContactSection);
