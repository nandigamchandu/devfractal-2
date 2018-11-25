import * as React from 'react'

import { Media, MediaLeft, MediaContent } from '../Media'
import { Image } from '../Image'
import { Content } from '../Content'
import { Button } from '../Button'
import { Field } from '../Field'
import { TextArea } from '../TextArea'

export const MediaObjectExample: React.SFC = () => (
  <Media>
    <MediaLeft>
      <Image size="64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </Image>
    </MediaLeft>
    <MediaContent>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros
        lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris
        sit amet dolor blandit rutrum. Nunc in tempus turpis.
      </Content>

      <Media>
        <MediaLeft>
          <Image size="32x32">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </Image>
        </MediaLeft>
        <MediaContent>
          <Content>
            <strong>Barbara Middleton</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
            eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
            mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          </Content>

          <Media>
            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
            lorem cursus ullamcorper sit amet nec massa.
          </Media>

          <Media>
            Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
            Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
            tincidunt iaculis diam non, porta aliquet tortor.
          </Media>
          <Media>
            <MediaLeft>
              <Image size="64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </Image>
            </MediaLeft>
            <MediaContent>
              <Content>
                <strong>Barbara Middleton</strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta eros lacus, nec ultricies elit blandit non. Suspendisse
                pellentesque mauris sit amet dolor blandit rutrum. Nunc in
                tempus turpis.
              </Content>
            </MediaContent>
          </Media>
          <Media>
            <MediaLeft>
              <Image size="48x48">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </Image>
            </MediaLeft>
            <MediaContent>
              <Field>
                <div className="control">
                  <TextArea rows={3} />
                </div>
              </Field>
              <Field>
                <div className="control">
                  <Button>Post comment</Button>
                </div>
              </Field>
            </MediaContent>
          </Media>
        </MediaContent>
      </Media>
    </MediaContent>
  </Media>
)
