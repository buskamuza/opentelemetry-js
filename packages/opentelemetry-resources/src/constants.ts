/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const CLOUD_RESOURCE = {
  /** Name of the cloud provider. Example values are aws, azure, gcp. */
  PROVIDER: 'cloud.provider',

  /** The cloud account id used to identify different entities. */
  ACCOUNT_ID: 'cloud.account.id',

  /** A specific geographical location where different entities can run. */
  REGION: 'cloud.region',

  /** Zones are a sub set of the region connected through low-latency links. */
  ZONE: 'cloud.zone',
};

/**
 * SpanAttributes defining a compute unit (e.g. Container, Process, Lambda
 * Function).
 * */
export const CONTAINER_RESOURCE = {
  /** The container name. */
  NAME: 'container.name',

  /** The container id. */
  ID: 'container.id',

  /** The name of the image the container was built on. */
  IMAGE_NAME: 'container.image.name',

  /** The container image tag. */
  IMAGE_TAG: 'container.image.tag',
};

/** SpanAttributes defining a computing instance (e.g. host). */
export const HOST_RESOURCE = {
  /**
   * Unique host id. For Cloud this must be the instance_id assigned by the
   * cloud provider
   */
  ID: 'host.id',

  /**
   * Name of the host. It may contain what hostname returns on Unix systems,
   * the fully qualified, or a name specified by the user.
   */
  NAME: 'host.name',

  /** Type of host. For Cloud this must be the machine type.*/
  TYPE: 'host.type',

  /** Name of the VM image or OS install the host was instantiated from. */
  IMAGE_NAME: 'host.image.name',

  /** VM image id. For Cloud, this value is from the provider. */
  IMAGE_ID: 'host.image.id',

  /** The version string of the VM image */
  IMAGE_VERSION: 'host.image.version',
};

/** SpanAttributes defining a deployment service (e.g. Kubernetes). */
export const K8S_RESOURCE = {
  /** The name of the cluster that the pod is running in. */
  CLUSTER_NAME: 'k8s.cluster.name',

  /** The name of the namespace that the pod is running in. */
  NAMESPACE_NAME: 'k8s.namespace.name',

  /** The name of the pod. */
  POD_NAME: 'k8s.pod.name',

  /** The name of the deployment. */
  DEPLOYMENT_NAME: 'k8s.deployment.name',
};

/** SpanAttributes describing the telemetry library. */
export const TELEMETRY_SDK_RESOURCE = {
  /** The name of the telemetry library. */
  NAME: 'telemetry.sdk.name',

  /** The language of telemetry library and of the code instrumented with it. */
  LANGUAGE: 'telemetry.sdk.language',

  /** The version string of the telemetry library */
  VERSION: 'telemetry.sdk.version',
};

/** SpanAttributes describing a service instance. */
export const SERVICE_RESOURCE = {
  /** Logical name of the service.  */
  NAME: 'service.name',

  /** A namespace for `service.name`. */
  NAMESPACE: 'service.namespace',

  /** The string ID of the service instance. */
  INSTANCE_ID: 'service.instance.id',

  /** The version string of the service API or implementation. */
  VERSION: 'service.version',
};

/** SpanAttributes describing a Process. */
export const PROCESS_RESOURCE = {
  /** A command which launced this proces.  */
  COMMAND: 'process.command',

  /** The full command with arguments as string.  */
  COMMAND_LINE: 'process.command_line',

  /** A name given to currently running porcess defaults to executable (process.title) .  */
  NAME: 'process.executable.name',

  /** An owner of currently running process.  */
  OWNER: 'process.owner',

  /** The full path to the process executable.  */
  PATH: 'process.executable.path',

  /** Process identifier of currently running process.  */
  PID: 'process.id',
};
