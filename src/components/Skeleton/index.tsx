import Skeleton from "react-loading-skeleton";

import { Container } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

export function TableSkeleton() {
  return (
    <>
      <Container>
        <thead>
          <tr>
            <th>
              <Skeleton
                width={200}
                height={30}
                baseColor="#B5B6B1 "
                highlightColor="#9E9E9C"
              />
            </th>
          </tr>
          <tr>
            <div>
              <Skeleton
                width={70}
                height={30}
                baseColor="#B5B6B1 "
                highlightColor="#9E9E9C"
              />
            </div>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div>
              <Skeleton
                width={50}
                baseColor="#B5B6B1 "
                highlightColor="#9E9E9C"
              />
              <Skeleton
                width={50}
                baseColor="#B5B6B1 "
                highlightColor="#9E9E9C"
              />
            </div>
            <Skeleton
              width={50}
              baseColor="#B5B6B1 "
              highlightColor="#9E9E9C"
            />
          </tr>
        </tbody>
      </Container>
    </>
  );
}
