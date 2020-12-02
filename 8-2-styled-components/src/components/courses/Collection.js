import styled from "styled-components";
import { Button } from "../ui/atoms/Button";
import { Title } from "../ui/atoms/Title";
import { Card } from "../ui/molecules/Card";
import { Dropdown } from "../ui/molecules/Dropdown";
import { Container } from "../ui/objects/Container";

import { api } from "../../services/api";

const Wrapper = styled.section`
  background: ${(props) => props.theme.backgroundLightColor};
  border-bottom: 1px solid ${(props) => props.theme.borderInvertedColor};
`;

const FiltersDropdown = styled(Dropdown)`
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  gap: 1.87rem;
  column-width: 18rem;
`;

const CourseCard = styled(Card)`
  margin-bottom: 1.87rem;
  break-inside: avoid;
`;

export function Collection() {
  const courses = api.getCourses().map((course) => {
    return {
      ...course,
      meta: course.authors,
      img: `/img/cursos/${course.img}`,
      link: `https://pro.codely.tv/library/${course.slug}`,
    };
  });

  return (
    <Wrapper>
      <Container>
        <Title>👌 Cursos disponibles</Title>

        <FiltersDropdown />

        <Grid>
          {courses.map((course) => {
            return (
              <CourseCard info={course}>
                <p>{course.description}</p>
                <Button as="a" variant="primary" block href={course.link}>
                  Empezar curso
                </Button>
              </CourseCard>
            );
          })}
        </Grid>
      </Container>
    </Wrapper>
  );
}
