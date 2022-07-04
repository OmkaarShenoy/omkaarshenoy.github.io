import './index.scss'
export default function ExperienceSection({ experiences }) {
  return (
    <div className="experience">
      <h2>Experiences</h2>
      <ul style={{ listStyleType: 'none' }}>
        {experiences.map((experience, index) => (
          <div>
            <li key={index}>
              <div className="pic">
                <img src={experience.image} alt="" />
                <span class="line"></span>
              </div>
              <div class="text">
                <div className="title">
                  <h3>{experience.title}</h3>

                  <div class="company">
                    <p>{experience.company}</p>
                  </div>
                  <div class="dates">
                  <p>
                    {experience.start} - {experience.end}
                  </p>
                  </div>
                </div>
                <div class="description">
                  <p>{experience.description}</p>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}
