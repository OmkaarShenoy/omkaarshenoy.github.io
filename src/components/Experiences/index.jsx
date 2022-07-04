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
                  <h3>
                    {experience.title}
                  </h3>
                
                <div>
                  <p className="font-medium text-gray-600 dark:text-gray-400">
                    {experience.company}
                  </p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  {experience.start} - {experience.end}
                </p>
              </div>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-400">
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
